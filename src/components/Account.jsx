import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const MyAccount = ({ userId, user, setUser, properties }) => {
  const [hostProperties, setHostProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`https://airbnc-1dqu.onrender.com/api/users/${userId}`)
      .then(({ data }) => {
        setUser(data.user);
      })
      .catch(() => {
        alert("Invalid user ID! Please log in into your account!");
      });
  }, [userId, setUser]);

  useEffect(() => {
    if (!user || !user.is_host || !user.user_id) return;
    axios
      .get(
        `https://airbnc-1dqu.onrender.com/api/properties?host_id=${user.user_id}`
      )
      .then(({ data }) => {
        setHostProperties(data.properties);
      });
  }, [user]);

  return (
    <>
      <aside className="my-account-details">
        <h2>Personal details:</h2>
        <img src={user.avatar} />
        <p>
          <strong>First name:</strong> {user.first_name}
        </p>
        <p>
          <strong>Surname:</strong> {user.surname}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone number:</strong> {user.phone_number}
        </p>
      </aside>
      {Boolean(user?.is_host) && (
        <aside className="host-properties">
          <h2>Your properties: </h2>
          <ul>
            {hostProperties.map((property) => (
              <Link
                key={property.property_id}
                to={`/properties/${property.property_id}`}
              >
                <li key={property.property_id}>
                  <img src={property.image} alt={property.property_name} />
                  <h2>{property.property_name}</h2>
                  <p>{property.location}</p>
                </li>
              </Link>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};

export default MyAccount;
