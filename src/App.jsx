import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleProperty from "./components/SingleProperty";
import AboutUs from "./components/About";
import { Route, Routes, Link } from "react-router";
import MyAccount from "./components/Account";
import ContactUs from "./components/ContactUs";
import LogIn from "./components/LogIn";

function App() {
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState(null);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/properties/:property_id" element={<SingleProperty />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/my-account/:userId"
          element={<MyAccount userId={userId} user={user} setUser={setUser} />}
        />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/log-in"
          element={<LogIn userId={userId} setUserId={setUserId} />}
        />
      </Routes>
    </>
  );
}

export default App;
