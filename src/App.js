import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Booking from './Components/Booking/Booking';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext=createContext()

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  return (
<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
<Router>
  <Switch>
    <Route exact path='/'>
      <Home></Home>
    </Route>
    <Route path='/home'>
      <Home></Home>
    </Route>
    <Route path='/login'>
      <Login></Login>
        </Route>
        <PrivateRoute path='/booking/:placeName'>
          <Booking></Booking>
        </PrivateRoute>
  </Switch>
</Router>

</UserContext.Provider>
  );
}

export default App;
