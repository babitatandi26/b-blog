import React from 'react';
import './App.css';
import Home from './container/Home';
import ContactUs from "./container/ContactUs";
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Post from './container/post';
import About from './container/AboutUs';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Header/>
      <Hero/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={ContactUs}/>
      <Route exact path="/post/:slug" component={Post}/>
    </div>
    </Router>
    </>
  );
}

export default App;
