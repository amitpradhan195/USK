import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "boxicons";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/PropDetails";
import Footer from "./components/Footer";
import Listings from "./pages/Listing";
import Faq from "./pages/FAQ";
import Finance from "./pages/Finance";

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
        // redirect to home if the url is messed up
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}
