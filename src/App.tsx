import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './components/TextField';
function App() {
  return (
    <div className="App">
      <TextField text="whatever" person={{first: "cool", last: "guy"}}></TextField>
    </div>
  );
}

export default App;
