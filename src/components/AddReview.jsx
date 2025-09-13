import { useState } from "react";
import axios from "axios";

const AddReview = ({ property_id, user, onReviewAdded }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      `https://airbnc-1dqu.onrender.com/api/properties/${property_id}/reviews`,
      {
        guest_id: user.user_id,
        rating: Number(rating),
        comment: comment.trim(),
      }
    );

    setRating("");
    setComment("");
    onReviewAdded?.();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a review</h3>

      <label>
        Rating (1–5)
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
      </label>

      <label>
        Comment
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </label>

      <button type="submit">Submit Review</button>
    </form>
  );
};

export default AddReview;
