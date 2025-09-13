import axios from "axios";

const ReviewsList = ({ reviews, setReviews, user }) => {
  console.log(reviews);
  return !reviews ? (
    <p> There is no reviews for this property!</p>
  ) : (
    <ul>
      {reviews.map((review) => {
        console.log(review.review_id);
        return (
          <li className="review-card" key={review.review_id}>
            <p>{review.comment}</p>
            <p>{review.guest}</p>
            {`${user.first_name} ${user.surname}` === review.guest ? (
              <button
                onClick={() => {
                  axios.delete(
                    `https://airbnc-1dqu.onrender.com/api/reviews/${review.review_id}`
                  );
                  axios
                    .get(
                      `https://airbnc-1dqu.onrender.com/api/properties/${property_id}/reviews`
                    )
                    .then(({ data }) => {
                      setReviews(data.reviews);
                    });
                }}
              >
                Delete
              </button>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
