import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from "./components/TextForm";
//import About from "./components/About";
import React, { useState } from 'react';


function App() {
  const [mode , setMode]= useState('light');
    const [alert, setalert] = useState();
  const togleMode= ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#404E4C ';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
    }
  }
  return (
    <>
    <Navbar title="LuqMan" mode={mode} togleMode= {togleMode}/>
    <TextForm  mode={mode}/>
    {/* <About /> */}
    </>
  );
}

export default App;
