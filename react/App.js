import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Best from './components/Best';
import Home from './components/Home';
import Login from './components/Login';

import "./css/Home.css";
import "./css/Best.css";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Home />   */}
          <Routes>
            <Route exact path="/" element={<Home />}/>

            <Route path="/Best" element={<Best />}/>
          </Routes>
        </BrowserRouter>
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;