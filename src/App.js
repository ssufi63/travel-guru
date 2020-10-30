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
import HotelDetails from './Components/Hotel/HotelDetails';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
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
        <Route path='/booking/:placeName'>
          <Booking></Booking>
        </Route>
        <PrivateRoute exact path='/hotelDetails'>
          <HotelDetails></HotelDetails>
        </PrivateRoute>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
  </Switch>
</Router>

</UserContext.Provider>
  );
}

export default App;
