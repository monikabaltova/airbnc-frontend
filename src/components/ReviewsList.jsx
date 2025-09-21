import axios from "axios";

const ReviewsList = ({ reviews, setReviews, user }) => {
  const handleDelete = async (id) => {
    setReviews((prev) => prev.filter((r) => r.review_id !== id));
    await axios.delete(`https://airbnc-1dqu.onrender.com/api/reviews/${id}`);
  };
  return !reviews ? (
    <p> There is no reviews for this property!</p>
  ) : (
    <ul className="review-list">
      {reviews.map((review) => {
        return (
          <li className="review-card" key={review.review_id}>
            <p className="review-comment">{review.comment}</p>
            <div className="review-profile">
              <p className="review-rating">⭐ {review.rating}/5</p>
              <img src={review.guest_avatar} alt={review.guest} />
              <p className="review-guest">{review.guest}</p>
            </div>
            {`${user.first_name} ${user.surname}` === review.guest ? (
              <button
                className="delete-btn"
                onClick={() => handleDelete(review.review_id)}
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
