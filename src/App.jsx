
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
    }

    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <div className="TextForm">
        <TextForm heading = "Enter the text" mode = {mode}/>
        {/* <About/> */}
      </div>
    </>
  );
};

export default App;
