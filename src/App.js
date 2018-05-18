import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import NavMenu from "./components/NavMenu";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { StickyContainer, Sticky } from 'react-sticky';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
