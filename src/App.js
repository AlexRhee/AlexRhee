import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import NavMenu from "./components/NavMenu";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import  Contact from "./components/Contact";
import { StickyContainer, Sticky } from 'react-sticky';



class App extends Component {
  render() {
    return (
      <div className="App">
        <StickyContainer >
          <Sticky relative="true">
            {({
              isSticky,
            }) => (
                <NavMenu />
              )}

          </Sticky>
        </StickyContainer>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
