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
import { CheckoutPage } from './containers/CheckoutPage';
import { OrderPage } from './containers/OrderPage';
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
  },[auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/:slug" element={<ProductListPage />} />
        <Route exact path="/:productSlug/:productId/p" element={<ProductDetailsPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/account/orders" element={<OrderPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
