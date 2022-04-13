import React from 'react';

import { Footer, Blog, Possibility, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
