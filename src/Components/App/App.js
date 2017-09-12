import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    };

    this.getUserId = this.getUserId.bind(this);
  }

  getUserId(userId, clubId) {
    this.setState({
      user_id: userId,
      club_id: clubId,
    });
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
                <LoginForm getUserId={this.getUserId} history={history} />}
            />
            <Route
              exact
              path="/signup"
              render={({ history }) =>
                <SignUpForm getUserId={this.getUserId} history={history} />}
            />
            <Route
              exact
              path="/clubpage/:club_id"
              render={({ match, history }) => (
                <div>
                  <Header clubId={this.state.club_id} />
                  <ClubPage userInfo={this.state} match={match} history={history} />
                </div>
              )}
            />
            <Route
              exact
              path="/suggestbook"
              render={({ history }) => (
                <div>
                  <Header clubId={this.state.club_id} />
                  <SearchPage userInfo={this.state} history={history} />
                </div>
              )}
            />
          </section>
        </Router>
      </div>
    );
  }
}

export default App;
