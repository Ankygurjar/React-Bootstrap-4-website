import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Image from './Images/image1.jpeg';
import Home from './Components/home';
import Links from './Components/links'
import About from './Components/about';
import Contact from './Components/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Router>

      </Router>

      <div>
      <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      </Router>
      </div>
      <div className="footer">
        <div className="content">
          <p>This is the footer. We have the copyright since 50 years ago!!!!</p>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
