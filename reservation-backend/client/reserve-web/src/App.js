import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import OrderSummary from "./pages/BookingCheckout/OrderSummary";
import Reserve from "./components/reserve/Reserve";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile"
import SearchItem from "./components/searchItem/SearchItem";

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" index element={<List />}/>
            <Route path="/Srchotel" element={<SearchItem/>}/>
            <Route path="/hotels:HotelCode" element={<Hotel/>}/>
          {/* /:HotelCode/list */}
          <Route path="/checkout" element={<OrderSummary/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/reserve" element={<Reserve/>}/>
          <Route path="/profile">
            <Route index element={<Profile/>}/>
          <Route path="profile/:UserID/edit" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    );
}

export default App;
