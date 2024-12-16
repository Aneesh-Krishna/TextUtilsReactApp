
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [mode, setMode] = useState('light')
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#343a40'
      showAlert("Dark mode enabled", "success")
    }

    else{
      setMode('light')
      document.body.style.backgroundColor = '#dee2e6'
      showAlert("Light mode enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => { 
    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-2">
        <Routes>
          <Route path='/' element={<TextForm heading = "Enter the text" mode = {mode} showAlert = {showAlert}/>} />
            
          <Route path='/about' element={<About mode = {mode}/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
