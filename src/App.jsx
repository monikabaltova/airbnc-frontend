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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/properties/:property_id" element={<SingleProperty />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
