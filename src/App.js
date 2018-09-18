import React, { Component } from 'react';

import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsOpen: false
    }

    this.openMenu = this.openMenu.bind(this);
  }


  openMenu() {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }


  render() {
    return (
      <div className="App">
        <Nav show={this.state.navIsOpen ? true : false} hideMenu={ this.openMenu }/>
        <div className="wrapper" style={{ 'transform': `translateX(${this.state.navIsOpen ? 80 : 0}%)` }}>
          <Hero navIsOpen={ this.openMenu } isOpen={this.state.navIsOpen ? 'block' : 'none'} isClose={this.state.navIsOpen ? 'none' : 'block'} />
          <Welcome />
          <About />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
