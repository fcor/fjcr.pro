import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
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
    </div>
  </Router>




const Home = () => <h1>Home</h1>
const Articles = () => <h1>Articles</h1>
const Projects = () => <h1>Projects</h1>
const Teaching = () => <h1>Teaching</h1>

export default App;
