import { useEffect, useState } from "react";
import axios from "axios";

const MyAccount = ({ userId, user, setUser }) => {
  useEffect(() => {
    axios
      .get(`https://airbnc-1dqu.onrender.com/api/users/${userId}`)
      .then(({ data }) => {
        console.log(data);
        setUser(data.user);
      });
  }, [userId, setUser]);
  return (
    <>
      <img src={user.avatar} />
    </>
  );
};

export default MyAccount;
