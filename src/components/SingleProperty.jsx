import axios from "axios";
import { useEffect, useState } from "react";
import { data, useParams } from "react-router";
import ReviewsList from "./ReviewsList";

const SingleProperty = () => {
  const { property_id } = useParams();
  const [property, setProperty] = useState({ property: "somthing" });
  const [isLoading, setIsLoading] = useState(false);
  const [isReviewsShowing, setIsReviewsShowing] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsReviewsShowing(false);
    setIsLoading(true);
    axios
      .get(`https://airbnc-1dqu.onrender.com/api/properties/${property_id}`)
      .then(({ data }) => {
        setProperty(data.property);
        setIsLoading(false);
      });
  }, [property_id]);

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
        <div>
          <img src={property.host_avatar} />
          <p>{property.host}</p>
        </div>
        <h3>Reviews</h3>
        {isReviewsShowing ? (
          <>
            <button onClick={() => setIsReviewsShowing(!isReviewsShowing)}>
              Hide reviews
            </button>
            <ReviewsList reviews={reviews} />
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
                  console.log(data);
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
