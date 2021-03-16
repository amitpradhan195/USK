import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "boxicons";
import "./App.css";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Details from "./pages/PropDetails";
// import Footer from "./components/Footer";
// import Listings from "./pages/Listing";
// import Faq from "./pages/FAQ";
// import Finance from "./pages/Finance";
// import About from "./pages/About";

const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Details = lazy(() => import('./pages/PropDetails'));
const Listings = lazy(() => import('./pages/Listing'));
const Faq = lazy(() => import('./pages/FAQ'));
const Finance = lazy(() => import('./pages/Finance'));
const About = lazy(() => import('./pages/About'));

export default function App() {
  return (
    <Router className="App">
      <Suspense fallback={<div className="vertical-center">Loading...</div>}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/listings" component={Listings} />
          <Route path="/faq" component={Faq} />
          <Route path="/finance" component={Finance} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer/>
      </Suspense>
    </Router>
  );
}
