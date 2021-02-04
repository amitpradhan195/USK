import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "boxicons";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/PropDetails";
import Footer from "./components/Footer";
import Listings from "./pages/Listing";
import Faq from "./pages/FAQ";
import Finance from "./pages/Finance";
import About from "./pages/About";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/listings" component={Listings} />
        <Route path="/faq" component={Faq} />
        <Route path="/finance" component={Finance} />
        <Route path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}
