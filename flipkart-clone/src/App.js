import './App.css';
import { HomePage } from './containers/HomePage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { ProductListPage } from './containers/ProductListPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
function App() {
  const dispatch=useDispatch();
  const auth=useSelector(state=>state.auth);
  useEffect(()=>{
    if (!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  },[auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:slug" element={<ProductListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
