import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleProperty from "./components/SingleProperty";
import { Route, Routes } from "react-router";
import MyAccount from "./components/Account";
import LogIn from "./components/LogIn";

function App() {
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState(null);

  return (
    <>
      <Header />
      <Nav user={user} />
      <Routes>
        <Route
          path=""
          element={
            <Home
              properties={properties}
              setProperties={setProperties}
              user={user}
            />
          }
        />
        <Route
          path="/properties/:property_id"
          element={<SingleProperty user={user} />}
        />
        <Route
          path="/home"
          element={
            <Home
              properties={properties}
              setProperties={setProperties}
              user={user}
            />
          }
        />
        <Route
          path="/my-account/:userId"
          element={
            <MyAccount
              userId={userId}
              user={user}
              setUser={setUser}
              properties={properties}
            />
          }
        />
        <Route
          path="/log-in"
          element={<LogIn userId={userId} setUserId={setUserId} />}
        />
      </Routes>
    </>
  );
}

export default App;
