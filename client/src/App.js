import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MoreDetails from './components/MoreDetails';
import Footer from './components/Footer';
import About from './components/About';
import './css/mobile.css';
import {Switch,Route,} from "react-router-dom";

function App() {

  return (
    <>
      <div id="container">
        <div>
          <Navbar/>
          <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route exact path = "/about" component = {About}/>
              <Route exact path = "/moredetails/:id" component = {MoreDetails}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
