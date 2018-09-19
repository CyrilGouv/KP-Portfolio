import React, { Component } from 'react';

import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Modal from './Components/Modal';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsOpen: false,
      modalIsOpen: false
    }

    this.openMenu = this.openMenu.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentDidUpdate() {
    const { modalIsOpen } = this.state;
    
    if (modalIsOpen) {
      document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
          this.closeModal();
        }
      });
    }
  }


  openMenu() {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  openModal(e) {
    e.preventDefault();
    if (!e.target.classList.contains('Works-link')) return;

    this.setState({ modalIsOpen: !this.state.modalIsOpen });
    document.querySelector('.Modal').style.animation = 'modalIn 500ms forwards';
  }

  closeModal() {
    if (this.state.modalIsOpen) {
      this.setState({ modalIsOpen: !this.state.modalIsOpen });
    }
  }


  render() {
    return (
      <div className="App">
        <Nav show={this.state.navIsOpen ? true : false} hideMenu={ this.openMenu }/>
        <div className="wrapper" style={{ 'transform': `translateX(${this.state.navIsOpen ? 80 : 0}%)` }}>
          <Hero navIsOpen={ this.openMenu } isOpen={this.state.navIsOpen ? 'block' : 'none'} isClose={this.state.navIsOpen ? 'none' : 'block'} />
          <Welcome />
          <About />
          <Works runModal={ this.openModal } />
          <Modal showModal={ this.state.modalIsOpen ? 'block' : 'none' } stopModal={ this.closeModal } />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
