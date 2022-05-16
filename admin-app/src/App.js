import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Switch is replaced by Routes
import  Home  from './container/Home';
import  Signin  from './container/Signin';
import  Signup  from './container/Signup';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
