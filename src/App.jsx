import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import Photos from './sections/Photos';
import Videos from './sections/Videos';
import Characteristics from './sections/Characteristics';
import Blog from './sections/Blog';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Photos />
        <Videos />
        <Characteristics />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;