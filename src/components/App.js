import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TaskOne from './Pages/TaskOne/TaskOne';
import TaskTwo from './Pages/TaskTwo/TaskTwo';
import TaskThree from './Pages/TaskThree/TaskThree';

import Layout from './Layout';

function App() {
  return (
    <div className='App'>
      <Router basename='movie_app'>
        <Switch>
          <Layout>
            <Route exact path='/' component={TaskOne} />
            <Route path='/two' component={TaskTwo} />
            <Route path='/three' component={TaskThree} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
