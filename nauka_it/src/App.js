import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store/InitialStore';

import './App.css';
import Header from './components/Header/Container/Header';
import {url} from './components/common/translations';

import Home from './components/Home/Container/Home';
import Materials from './components/Materials/Container/Materials';
import Program from './components/Program/Container/Program';
import Quiz from './components/Quiz/Container/Quiz';
import QuizGame from './components/QuizGame/QuizGame';
import Email from './components/Email/Container/Email';
import Article from './components/Article/Article';
import MaterialGroup from './components/Materials/Container/MaterialGroup';
import GroupFile from './components/Program/Container/GroupFiles'; 
import Login from './components/Login/Container/Login';
import Spinner from './components/SpinnerLoader/Spinner';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path={url.quizGame} component={QuizGame} />
              <Route component={Header} />
            </Switch>
            <div style={{marginLeft: 240}}>
              <Route exact path={url.home} component={Home} />
              <Route path={url.materials} component={Materials} />
              <Route path={url.programs} component={Program} />
              <Route path={url.quiz} component={Quiz} />
              <Route path={url.email} component={Email} />
              <Route path='/article/:id' component={Article} />
              <Route path='/doc/:heading' component={MaterialGroup} />
              <Route path='/file/:heading' component={GroupFile} />
              <Route path={url.login} component={Login} />
            </div>
            <Spinner />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
