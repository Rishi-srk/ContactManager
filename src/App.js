
import './App.css';
import Header from'./Header';
import Contactlist from './components/Contactlist';
import Addcontact from './components/Addcontact';
import Edit from'./components/Edit';
import 'bootstrap/dist/css/bootstrap.css'
import React,{useState} from "react";
import {Routes,Route,Navlink,Navigate} from 'react-router-dom';

function App() {
  

  return (
    <div>
    <Header/>
   <div className='container '>
   
  <Routes>
    <Route path='addcontact' element={<Addcontact />}/>
    <Route path='contactlist' element={<Contactlist/>}/>
    <Route path="" element={<Navigate replace to={'addcontact'}/>}/>
    <Route path='/contactlist/edit/:id' element={<Edit/>}/>
  </Routes>

    
    
    </div>
    </div>

  );
}

export default App;
