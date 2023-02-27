import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#475d9f";
      showAlert('Dark Mode has been enabled', 'success')
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode has been enabled', 'success')
    }
  }

  const handleRadioChange = (e)=>{
    if(e.target.value === 'green'){
      setMode('success');
    }
    if(e.target.value === 'blue'){
      setMode('primary');
    }
  }

  return (
    <>
    <Router>
    <Navbar title="SofaWed" mode={mode} toggleMode={toggleMode} handleRadioChange={handleRadioChange}/>
    <Alert alert={alert} />
        <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text here to Analyze" mode={mode} />}>
            </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
