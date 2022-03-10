import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/index.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";
import Accessory from "./components/pages/Accessory";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:slug" exact component={Product} />
        <Route path="/products" exact component={Products} />
        <Route path="/accessory" exact component={Accessory} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
