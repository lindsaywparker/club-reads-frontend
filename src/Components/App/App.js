import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import LoginForm from '../../Components/LoginForm/LoginForm';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import ClubPage from '../../Components/ClubPage/ClubPage';
import SearchPage from '../../Components/SearchPage/SearchPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <section>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/clubpage/:club_name" component={ClubPage} />
            <Route exact path="/suggestbook" component={SearchPage} />
          </section>
        </Router>
      </div>
    )
  }
}

export default App;
