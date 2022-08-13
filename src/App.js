import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Route } from 'react-router-dom';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <BrowserRouter>
      <div>
      <Route path="/" exact component={PageOne} />
      <Route path="/about" component={About} />
      </div>
      </BrowserRouter> */}
       
      {/* <About/> */}
      <TextForm  heading="Enter the text to Analyze below" mode={mode}/>
    </div>
    </> 
  );
}

export default App;