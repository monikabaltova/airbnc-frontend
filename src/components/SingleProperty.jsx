import axios from "axios";
import { useEffect, useState } from "react";
import { data, useParams } from "react-router";
import ReviewsList from "./ReviewsList";
import AddReview from "./AddReview";
import FavouritAProperty from "./FavouriteAProperty";

const SingleProperty = ({ user }) => {
  const { property_id } = useParams();
  const [property, setProperty] = useState({ property: "somthing" });
  const [isLoading, setIsLoading] = useState(false);
  const [isReviewsShowing, setIsReviewsShowing] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [refreshReviews, setRefreshReviews] = useState(false);

  useEffect(() => {
    setIsReviewsShowing(false);
    setIsLoading(true);
    axios
      .get(`https://airbnc-1dqu.onrender.com/api/properties/${property_id}`)
      .then(({ data }) => {
        setProperty(data.property);
        setIsLoading(false);
      });
  }, [property_id, refreshReviews]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className="single-property">
        <h2>{property.property_name}</h2>
        {property.images &&
          property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${property.property_name} ${index + 1}`}
            />
          ))}
        <p>{property.location}</p>
        <p>{property.description}</p>
        <p>GBP {property.price_per_night}</p>
        <p>{property.favourite_count}</p>
        <FavouritAProperty user={user} property_id={property_id} />
        <div>
          <img src={property.host_avatar} />
          <p>{property.host}</p>
        </div>
        <h3>Reviews</h3>
        {user?.user_id ? (
          <AddReview
            property_id={property_id}
            user={user}
            property={property}
            onReviewAdded={() => setRefreshReviews((prev) => !prev)}
          />
        ) : null}
        {isReviewsShowing ? (
          <>
            <button onClick={() => setIsReviewsShowing(!isReviewsShowing)}>
              Hide reviews
            </button>
            <ReviewsList
              reviews={reviews}
              setReviews={setReviews}
              user={user}
            />
          </>
        ) : (
          <button
            onClick={() => {
              setIsReviewsShowing(!isReviewsShowing);
              axios
                .get(
                  `https://airbnc-1dqu.onrender.com/api/properties/${property_id}/reviews`
                )
                .then(({ data }) => {
                  setReviews(data.reviews);
                });
            }}
          >
            Show reviews
          </button>
        )}
      </section>
    </>
  );
};

export default SingleProperty;
