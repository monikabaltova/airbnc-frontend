import { useState } from "react";
import axios from "axios";

const FavouritAProperty = ({ user, property_id }) => {
  const [favourited, setFavourited] = useState(false);

  const handleToggle = async () => {
    if (!user?.user_id) {
      alert("Please log in to like properties.");
      return;
    }

    if (!favourited) {
      await axios.post(
        `https://airbnc-1dqu.onrender.com/api/properties/${property_id}/favourite`,
        {
          guest_id: user.user_id,
          property_id: property_id,
        }
      );
      setFavourited(true);
    } else {
      await axios.delete(
        `https://airbnc-1dqu.onrender.com/api/properties/${property_id}/users/${user.user_id}/favourite`
      );
      setFavourited(false);
    }
  };
  return (
    <button className="favourited-button" onClick={handleToggle}>
      {favourited ? "Liked" : "Like"}
    </button>
  );
};

export default FavouritAProperty;
