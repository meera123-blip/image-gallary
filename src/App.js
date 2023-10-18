import React from 'react'
import Body from './components/Body'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import ListOfSearchResult from './components/listOfSearchResult';
import {  Routes, Route } from 'react-router-dom';
import { IsOnline } from './utils/IsOnline';
import Error from './utils/error';






const App = () => {
  
  const status = IsOnline();

  return (!status)?<h1>Someting went wrong!!please check your internet connection!!!</h1>: (
   <div>
  
    <BrowserRouter>
       <Navbar/>
       <Routes>
  <Route path="/" element={<Body/>}>
    <Route index element={<Home />} />
    <Route path="image/:query" element={<ListOfSearchResult />} />
    <Route component={Error} />
  </Route>
</Routes>
       </BrowserRouter>
   
       
   </div>
  )
}

export default App
