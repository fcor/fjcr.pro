import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import './App.css';

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/articles" component={Articles} />
        <Route path="/projects" component={Projects} />
        <Route path="/teaching" component={Teaching} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>


const Navbar = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/" >Home</NavLink>
    <NavLink activeClassName="active" to="/about" >About</NavLink>
    <NavLink activeClassName="active" to="/articles" >Articles</NavLink>
    <NavLink activeClassName="active" to="/projects" >Projects</NavLink>
    <NavLink activeClassName="active" to="/teaching" >Teaching</NavLink>
  </nav>
)

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Articles = () => <h1>Articles</h1>
const Projects = () => <h1>Projects</h1>
const Teaching = () => <h1>Teaching</h1>

export default App;
