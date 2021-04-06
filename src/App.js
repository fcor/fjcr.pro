import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Nav from './components/Nav'
import Home from './components/Home/'
import Teaching from './components/Teaching/'
import './App.css';

const App = () =>
  <Router>
    <div class="bg"></div>
    <div className="react-body">
      <Nav />
      <div className="contenido">
        <Route render={({ location }) =>
          <TransitionGroup exit={false}>
            <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
              <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/articles" component={Soon}/>
                  <Route path="/projects" component={Soon}/>
                  <Route path="/teaching" component={Soon}/>
                  <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        }/>
      </div>
      <Footer />
    </div>
  </Router>

const Footer = () =>
  <footer className="footer">
    <p>Copyright © 2021</p>
  </footer>

const Soon = () =>
  <div className="soon">
    <h1>Coming soon!</h1>
  </div>

const NotFound = () =>
  <div className="soon">
    <h1>Page not found :(</h1>
  </div>

export default App;
