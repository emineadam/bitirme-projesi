import React from 'react';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import Content from './components/Content';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <MainMenu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
