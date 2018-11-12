import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Container/Header';
import {url} from './components/common/translations';

import Home from './components/Home/Container/Home';
import Materials from './components/Materials/Container/Materials';
import Program from './components/Program/Container/Program';
import Quiz from './components/Quiz/Container/Quiz';
import Email from './components/Email/Container/Email';
import Article from './components/Article/Article';
import MaterialGroup from './components/Materials/Container/MaterialGroup';
import GroupFile from './components/Program/Container/GroupFiles'; 


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <div style={{marginLeft: 240}}>
              <Route exact path={url.home} component={Home} />
              <Route path={url.materials} component={Materials} />
              <Route path={url.programs} component={Program} />
              <Route path={url.quiz} component={Quiz} />
              <Route path={url.email} component={Email} />
              <Route path='/article/:id' component={Article} />
              <Route path='/doc/:heading' component={MaterialGroup} />
              <Route path='/file/:heading' component={GroupFile} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
