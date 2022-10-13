import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Best from './components/Best';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';

import "./css/Home.css";
import "./css/Best.css";
import "./css/Login.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Home />   */}
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Best" element={<Best />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Detail" element={<Detail />}/>
          </Routes>
        </BrowserRouter>
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;