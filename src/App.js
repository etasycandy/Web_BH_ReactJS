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
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import Account from "./components/pages/Account";
import SignIn from "./components/pages/SignIn";
import Register from "./components/pages/Register";

import Error from "./components/pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:slug" exact component={Product} />
        <Route path="/products" exact component={Products} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/accounts" exact component={Account} />
        <Route path="/accounts/sign-in" exact component={SignIn} />
        <Route path="/accounts/register" exact component={Register} />

        <Route path="*" exact component={Error} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
