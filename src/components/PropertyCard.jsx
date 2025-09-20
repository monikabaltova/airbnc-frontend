import { Link } from "react-router";

const PropertyCard = ({ properties }) => {
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
                <button>View</button>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default PropertyCard;
