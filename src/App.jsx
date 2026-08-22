import { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./components/Nav/";
import Home from "./components/Home/";
import Duality from "./components/Projects/duality";
import Culpable from "./components/Projects/culpable";
import Talks from "./components/Talks/";
import Projects from "./components/Projects/";
import "./App.css";
import Molecularweb from "./components/Projects/molecularweb";
import NuestrasEsperanzas from "./components/Projects/nuestrasEsperanzas";
import PDB2AR from "./components/Projects/pdb2ar";
import Mwxr from "./components/Projects/molecularwebxr";
import DrawingInspiration from "./components/Projects/drawingInspiration";
import About from "./components/About/";
import Footer from "./components/Footer/";

const AnimatedRoutes = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <TransitionGroup exit={false}>
      <CSSTransition
        key={location.pathname.split("/")[1]}
        nodeRef={nodeRef}
        timeout={250}
        classNames="fade"
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/talks" element={<Talks />} />
            <Route path="/work" element={<Projects />} />
            <Route path="/duality" element={<Duality />} />
            <Route path="/molecularweb" element={<Molecularweb />} />
            <Route path="/nuestras-esperanzas" element={<NuestrasEsperanzas />} />
            <Route path="/culpable" element={<Culpable />} />
            <Route path="/pdb2ar" element={<PDB2AR />} />
            <Route path="/molecularwebxr" element={<Mwxr />} />
            <Route path="/drawing-inspiration" element={<DrawingInspiration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <Router>
    <div className="bg"></div>
    <div className="react-body">
      <Navbar />
      <div className="content">
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  </Router>
);

const NotFound = () => (
  <div className="soon">
    <h1>Page not found :(</h1>
  </div>
);

export default App;
