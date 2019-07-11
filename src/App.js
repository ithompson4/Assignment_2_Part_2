import React from 'react';

import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web301 Assignment 2</h1>
        <h2>Creating Contact Form and Modal Component</h2>
        <div>  
          <Card cardStyle="cardShadow" cardTitle="Contact Form:" />
        </div>
      </header>
    </div>
  );
}

export default App;