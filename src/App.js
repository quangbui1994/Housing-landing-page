import React from 'react';
import styles from './App.module.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={styles.App}>
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
};

export default App;