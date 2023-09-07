import './App.css';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import About from './Component/About';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("  Light mode will be applyed", "success");
      //document.title = 'Textutils - Light Mode';
    }

    else {
      setMode('dark');
      document.body.style.backgroundColor = '#080000'
      showAlert("  Dark mode will be applyed", "success");
      //document.title = 'Textutils - Dark Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3" mode={mode}> 
            <Routes mode={mode}>
            <Route exact path="/about" element={<About mode={mode} />}  />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Textutils is an id to conway your text into uppercase,lowercase,remove extra spaces and many more" mode={mode}  />} />
            </Routes>
        </div >
      </Router>
    </>
  );
  
}

export default App;
