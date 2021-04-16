import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Login from './Login'
import About from './About'
import Navbar from './Navbar'
import Signup from './Signup'
import Messages from './Messages'
import {BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/messages' component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);
