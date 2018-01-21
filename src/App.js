import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Teaching from './components/Teaching'
import './App.css';

const App = () =>
  <Router>
    <div className="react-body">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Soon} />
        <Route path="/projects" component={Soon} />
        <Route path="/teaching" component={Teaching} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      <Footer />
    </div>
  </Router>

const Footer = () =>
  <footer className="footer">
    <p>Copyright © 2018</p>
  </footer>

const Soon = () =>
  <div className="contenido">
    <div className="soon">
      <h1>Coming soon!</h1>
    </div>
  </div>

export default App;
