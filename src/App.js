import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import Navbar from './components/Navbar/Navbar';
import Carousel from './container/Carousel/Carousel'
import './App.css';
import Newsletter from './container/Newsletter/Newsletter';

const App = () => (
  <div>
    <Navbar />
    <Carousel />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <Gallery />
    <FindUs />
    <Intro />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
