import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import ListRoom from "./components/ListRoom";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
//import New from "./pages/new/New";
import Booked from "./components/Booked"
import Home from "./pages/home/Home"
import EditRoom from "./components/EditRoom"
import AddRoom from "./components/AddRoom"

//import { userInputs, productInputs } from "./formSource";
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="room/:RoomNo/edit" element={<EditRoom />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<AddRoom title="Add New Room" />}
              />
            </Route>
            
            <Route path="viewBooked">
              <Route index element={<Booked />} />
              <Route path=":bookingId" element={<Single />} />
            </Route>

            <Route path="hotels">
              <Route index element={<ListRoom />} />
              <Route path="room/:RoomNo/edit" element={<EditRoom />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<AddRoom title="Add New Room" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
