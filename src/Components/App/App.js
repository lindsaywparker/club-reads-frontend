import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import LoginForm from '../../Components/LoginForm/LoginForm';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import ClubPage from '../../Components/ClubPage/ClubPage';
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
            <Route exact path="/clubpage" component={ClubPage} />
          </section>
        </Router>
      </div>
    )
  }
}

export default App;
