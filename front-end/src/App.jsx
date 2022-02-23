import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Dashboard from './Page/Dashboard';
import Home from './Page/home'

function App (){
  return (
    <React.StrictMode>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/user/:id" element={ <Dashboard/>}/>
      </Routes>
    </React.StrictMode>
  );
}

export default App