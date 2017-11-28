import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import './App.css';

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/projects" component={Projects} />
        <Route path="/teaching" component={Teaching} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      <Footer />
    </div>
  </Router>

const Footer = () =>
  <footer className="footer">
    <p>Copyright © 2017</p>
  </footer>

const Articles = () => <h1>Articles</h1>
const Projects = () => <h1>Projects</h1>
const Teaching = () => <h1>Teaching</h1>

export default App;
