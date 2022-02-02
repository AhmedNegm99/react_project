import React,{Component} from 'react';
import Navbar from './Components/Navbar'
import Index from './Components/Index';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class  App extends Component{
  render(){
    return (
      <BrowserRouter className="App">
      <Navbar  />
      <Routes>
      <Route path="/"  element={<Index />}  />
      <Route path="/Contact" element={<Contact />}  />
      </Routes>
      <Footer />

      </BrowserRouter>
    );
  }

}

export default App;
