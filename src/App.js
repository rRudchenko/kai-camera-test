import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/Footer';
import HomeTitle from './components/HomeTitle';
import GalleryTabs from './components/Gallery';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomeTitle />
        <GalleryTabs />
        <Footer />
      </div>

    );
  }
}


export default App;
