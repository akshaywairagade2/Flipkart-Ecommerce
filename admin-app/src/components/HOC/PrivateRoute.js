import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute=(props)=>{
    return <Route {...props}/>
}

export default PrivateRoute;
// const PrivateRoute = ({ children }) => {
//     const authed = isauth() // isauth() returns true or false based on localStorage
    
//     return authed ? children : <Navigate to="/Home" />;
//   }
// export default PrivateRoute;