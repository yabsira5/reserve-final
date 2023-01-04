import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";

import ManagerList from "./pages/managerlist/ManagerList";
import Bookings from "./pages/bookings/Bookings";
import NewBooking from "./pages/bookings/NewBooking";
import NewManager from "./pages/managerlist/NewManager";

import ListGuest from "./components/ListGuest";
import EditGuest from "./components/EditGuest";
import ListHotel from "./components/ListHotel";
import AddHotel from "./components/AddHotel";
import ListEmp from "./pages/managerlist/ManagerList";
import EditManager from "./components/EditManager";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<ListGuest />} />
              <Route path="user/:UserID/edit" element={<EditGuest />} />
            </Route>

              <Route path="managers">
                <Route index element={<ListEmp/>} />
                <Route path="emp/:EmployeeID/edit" element={<EditManager />} />
                <Route
                  path="newmanager"
                  element={<NewManager title="Add New Manager" />}
              />
              </Route>
              
            <Route path="bookings">
              <Route index element={<Bookings />} />
              <Route path=":bookingId" element={<Single />} />
              <Route
                path="newBooking"
                element={<NewBooking title="Add New Booking" />}
              />
            </Route>

            <Route path="hotels">
              <Route index element={<ListHotel />} />
              <Route path=":hotelId" element={<Single />} />
              <Route
                path="newHotel"
                element={<AddHotel title="Add New Hotel" />}
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
