import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("https://airbnc-1dqu.onrender.com/api/properties")
      .then(({ data }) => {
        setProperties(data.properties);
        console.log(data.properties[0]);
      });
  }, []);

  return (
    <>
      <ul className="properties">
        {properties.map((property) => {
          return (
            <Link
              key={property.property_id}
              to={`/properties/${property.property_id}`}
            >
              <li>
                <img src={property.image} alt={property.property_name} />
                <h2>{property.property_name}</h2>
                <p>{property.location}</p>
                <p>GBP {property.price_per_night}</p>
                <button>Book</button>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
