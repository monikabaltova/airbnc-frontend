const ReviewsList = ({ reviews }) => {
  return !reviews ? (
    <p> There is no reviews for this property!</p>
  ) : (
    <ul>
      {reviews.map((review) => {
        return (
          <li className="review-card" key={review.review_id}>
            <p>{review.comment}</p>
            <p>{review.guest}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
