import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
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
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/finance" component={Finance} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
