import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
          <Header />
          <Feed />
          <Profile />
      </div>
  );
}

export default App;
