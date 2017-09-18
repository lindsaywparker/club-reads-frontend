import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import scheduler from 'node-schedule';

import LoginForm from '../../Components/LoginForm/LoginForm';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import ClubPage from '../../Components/ClubPage/ClubPage';
import SearchPage from '../../Components/SearchPage/SearchPage';
import Header from '../../Components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user_id: null,
      club_id: null,
      readBooks: [],
      currentBook: {},
      apiUrl: 'google.com',
    };

    this.getUserId = this.getUserId.bind(this);
    this.updateBookSchedule = this.updateBookSchedule.bind(this);
  }

  componentWillMount() {
    const apiUrl = process.env.NODE_ENV === 'production' ? 'https://clubreads-api.herokuapp.com/' : '';
    this.setState({ apiUrl });
    console.log('hi, your apiUrl is...', apiUrl);
  }

  componentDidMount() {
    const updateTimer = scheduler.scheduleJob('* * 1 * *', () => {
      this.updateBookSchedule();
      console.log('Current book updated!');
    });
  }

  getUserId(userId, clubId) {

    fetch(`${this.state.apiUrl}/api/v1/book?club_id=${clubId}`)
      .then(data => data.json())
      .then((books) => {
        const reading = books.filter(book => book.status === 'reading');
        const read = books.filter(book => book.status === 'read');
        this.setState({
          readBooks: read,
          currentBook: reading[0],
        });
      });

    this.setState({
      user_id: userId,
      club_id: clubId,
    });
  }

  updateBookSchedule() {
    const read = [];
    let suggested = null;

    fetch(`${this.state.apiUrl}/api/v1/book?status=reading`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newStatus: 'read',
        newUpdatedAt: new Date(),
      }),
    })
      .then(() => {
        fetch(`${this.state.apiUrl}/api/v1/book?club_id=${this.state.club_id}`)
          .then(res => res.json())
          .then((books) => {
            books.forEach((book) => {
              if (book.status === 'read') {
                read.push(book);
              } else if (!suggested || book.upvotes > suggested.upvotes) {
                suggested = Object.assign({}, book);
              }
            });
            fetch(`${this.state.apiUrl}/api/v1/book?id=${suggested.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                newStatus: 'reading',
                newUpdatedAt: new Date(),
              }),
            })
              .then(data => console.log(data))
              .catch(err => console.log(err));
            this.setState({
              readBooks: read,
              currentBook: suggested,
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Router>
          <section>
            <Route
              exact
              path="/"
              render={({ history }) =>
                <LoginForm getUserId={this.getUserId} history={history} apiUrl={this.state.apiUrl} />}
            />
            <Route
              exact
              path="/signup"
              render={({ history }) =>
                <SignUpForm getUserId={this.getUserId} history={history} apiUrl={this.state.apiUrl} />}
            />
            <Route
              exact
              path="/clubpage/:club_id"
              render={({ match, history }) => (
                <div>
                  <Header clubId={this.state.club_id || ''} getUserId={this.getUserId} history={history} />
                  <ClubPage readBooks={this.state.readBooks} currentBook={this.state.currentBook} userInfo={this.state} match={match} history={history} apiUrl={this.state.apiUrl} />
                </div>
              )}
            />
            <Route
              exact
              path="/suggestbook"
              render={({ history }) => (
                this.state.club_id ?
                  <div>
                    <Header clubId={this.state.club_id || ''} getUserId={this.getUserId} history={history} />
                    <SearchPage userInfo={this.state} history={history} apiUrl={this.state.apiUrl} />
                  </div>
                  : <Redirect to="/" />
              )}
            />
          </section>
        </Router>
      </div>
    );
  }
}

export default App;
