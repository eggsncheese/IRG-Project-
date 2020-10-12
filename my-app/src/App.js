import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './searchbar';
import Navbar from './navbar';
import Button from './button';
function App() {
  return (
  
    <div className="App">
        <Navbar/>
      <header className="App-header">
     

        <p>
          eGRC Policy Search
        </p>
        <Searchbar />
        <Button />

      </header>
    </div>
  );
}

export default App;
