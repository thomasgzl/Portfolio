import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';

import HeaderButton from './components/Button';
import Navigation from './components/Navbar';
import Apropos from './components/Apropos';
import Projets from './components/Projets';
import Contact from './components/Contact';

class App extends Component {
  
  render() {
    return (

      <div className="App">

      <Navigation />
      <ScrollableAnchor id={'home'}>
        <header className="App-header">

          <h1 className="titre">
            GONZALEZ THOMAS
          </h1>

          <h2 className="sous-titre">
          💻 Développeur web Full-Stack - JavaScript / React / Node.js -
          </h2>
          <HeaderButton />

        </header>
        </ScrollableAnchor>
      
      <Apropos />
      <Projets />
      <Contact />
      
      </div>
    );
  }
}

export default App;
