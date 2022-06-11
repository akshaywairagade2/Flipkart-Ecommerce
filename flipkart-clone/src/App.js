import './App.css';
import { HomePage } from './containers/HomePage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { ProductListPage } from './containers/ProductListPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import { ProductDetailsPage } from './containers/ProductDetailsPage';
import { CartPage } from './containers/CartPage';
import { updateCart } from './actions/cart.action';
function App() {
  const dispatch=useDispatch();
  const auth=useSelector(state=>state.auth);
  useEffect(()=>{
    if (!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  },[auth.authenticate]);

  useEffect(()=>{
    dispatch(updateCart());
  },[]);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:slug" element={<ProductListPage />} />
        <Route exact path="/:productSlug/:productId/p" element={<ProductDetailsPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
