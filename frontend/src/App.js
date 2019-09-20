import React from 'react';

import Nav from './template/Nav'
import Carousel from './template/Carousel'
import Footer from './template/Footer'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Carousel />
        <Routes />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
