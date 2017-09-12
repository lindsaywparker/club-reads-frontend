import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm/LoginForm';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import ClubPage from '../../Components/ClubPage/ClubPage';
import SearchPage from '../../Components/SearchPage/SearchPage';

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
              render={({ match, history }) =>
                <ClubPage userInfo={this.state} match={match} history={history} />}
            />
            <Route
              exact
              path="/suggestbook"
              render={({ history }) =>
                <SearchPage userInfo={this.state} history={history} />}
            />
          </section>
        </Router>
      </div>
    );
  }
}

export default App;
