import logo from './logo.svg';
import React from 'react';
import SignIn from './component/loginPage';
import Register from './component/registerPage';
import LandingPage from './component/landingPage';
import Card from './component/card';
import CreateNote from './component/createNote';
import {BrowserRouter, Routes , Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/home' element={<LandingPage/>}></Route>
      <Route path='/' element={<SignIn/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/createnote' element={<CreateNote/>}></Route>
    </Routes>
    </>
    </BrowserRouter>
    
    
  );
}

export default App;
