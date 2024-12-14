import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  return (
    <>
      <Navbar title = "TextUtils"/>
      <div className="TextForm">
        <TextForm heading = "Enter the text"/>
      </div>
    </>
  );
};

export default App;
