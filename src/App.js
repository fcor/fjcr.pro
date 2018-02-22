import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Media from "react-media"
import Nav from './components/Nav'
import Home from './components/Home'
import Teaching from './components/Teaching'
import './App.css'

const App = () =>
  <Router>
      <Media query="(min-width: 768px)">
        { matches =>
            matches
              ? <Content version="desktop" />
              : <Content version="mobile" />
        }
      </Media>
  </Router>


const Content = props =>
  <div className="react-body">
    <Nav />
    <div className="contenido" style={{alignItems: `${(props.version==='mobile') ? 'center' : ''}`}}>
      <Route render={({ location }) =>
        <TransitionGroup exit={false}>
          <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
            <Switch location={location}>
                <Route exact path="/" render={() => <Home version={props.version} />} />
                <Route path="/articles" render={() => <Soon />}/>
                <Route path="/projects" render={() => <Soon />}/>
                <Route path="/teaching" render={() => <Teaching version={props.version} />}/>
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      }/>
    </div>
    <Footer />
  </div>

const Footer = () =>
  <footer className="footer">
    <p>Copyright © 2018</p>
  </footer>

const Soon = () =>
  <div className="caja">
    <div className="soon">
      <h1>Coming soon!</h1>
    </div>
  </div>

export default App;
