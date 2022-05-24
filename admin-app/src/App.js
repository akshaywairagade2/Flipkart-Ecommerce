import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Switch is replaced by Routes
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/signin" element={<Signin />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
