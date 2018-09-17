import React, { Component } from 'react';

import Hero from './Components/Hero';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Welcome />
        <About />
        <Works />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
