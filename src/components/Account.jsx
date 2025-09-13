import { useEffect, useState } from "react";
import axios from "axios";

const MyAccount = ({ userId, user, setUser }) => {
  if (!user?.user_id) {
    alert("Please log in into your account!");
    return;
  }
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
