import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./components/Nav/";
import Home from "./components/Home/";
import Articles from "./components/Articles/";
import Teaching from "./components/Teaching";
import Talks from "./components/Talks/";
import Projects from "./components/Projects/";
import "./App.css";
import Molecularweb from "./components/Projects/molecularweb";
import Homer from "./components/Projects/homerMetaverse";
import NuestrasEsperanzas from "./components/Projects/nuestrasEsperanzas";

const App = () => (
  <Router>
    <div className="bg"></div>
    <div className="react-body">
      <Navbar />
      <div className="content">
        <Route
          render={({ location }) => (
            <TransitionGroup exit={false}>
              <CSSTransition
                key={location.pathname.split("/")[1]}
                timeout={250}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/articles" component={Articles} />
                  <Route path="/talks" component={Talks} />
                  <Route exact path="/work" component={Projects} />
                  <Route path="/teaching" component={Teaching} />
                  <Route path="/molecularweb" component={Molecularweb} />
                  <Route path="/homers-metaverse" component={Homer} />
                  <Route path="/nuestras-esperanzas" component={NuestrasEsperanzas} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
      <Footer />
    </div>
  </Router>
);

const Footer = () => (
  <footer className="footer">
    <p>Copyright © 2023 🤘 - fabio@fjcr.pro</p>
  </footer>
);

const Soon = () => (
  <div className="soon">
    <h1>Coming soon!</h1>
  </div>
);

const NotFound = () => (
  <div className="soon">
    <h1>Page not found :(</h1>
  </div>
);

export default App;
