import React, {Suspense, lazy} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "boxicons";
import "./App.css";
import "./css/style.scss";

const Home = lazy(() => import('./pages/Home/index.js'));
const Navbar = lazy(() => import('./components/Navbar/index.js'));
const Footer = lazy(() => import('./components/Footer/index.js'));
const Details = lazy(() => import('./pages/PropDetails/index.js'));
const Listings = lazy(() => import('./pages/Listing/index.js'));
const Faq = lazy(() => import('./pages/FAQ/index.js'));
const Finance = lazy(() => import('./pages/Finance/index.js'));
const About = lazy(() => import('./pages/About/index.js'));
const VIP = lazy(() => import('./pages/VIP/index.js'));
const DreamHouse = lazy(() => import('./pages/DreamHouse/index.js'));

export default function App() {
  return (
    <Router className="App">
      <Suspense fallback={<div className="screenLoader">Loading...</div>}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/listings" component={Listings} />
          <Route path="/faq" component={Faq} />
          <Route path="/finance" component={Finance} />
          <Route path="/about" component={About} />
          <Route path="/vip" component={VIP} />
          <Route path="/dream-house" component={DreamHouse} />
        </Switch>
        <Footer/>
      </Suspense>
    </Router>
  );
}
