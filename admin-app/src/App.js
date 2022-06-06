import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; //Switch is replaced by Routes
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions/auth.actions';
import { Products } from './container/Products';
import { Orders } from './container/Orders';
import { Category } from './container/Category';
import { getAllCategory, getInitialData } from './actions'
import { NewPage } from './container/NewPage';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate){
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/page" element={<PrivateRoute><NewPage/></PrivateRoute>} />
        <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>} />
        <Route path="/category" element={<PrivateRoute><Category/></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><Orders/></PrivateRoute>} />
        <Route path="/signin" element={<Signin />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
