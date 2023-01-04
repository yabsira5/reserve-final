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

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
          <Route path="/checkout" element={<OrderSummary/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/reserve" element={<Reserve/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter> 
    );
}

export default App;
