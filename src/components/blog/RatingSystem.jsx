import React, { useState } from 'react';

const RatingSystem = ({ post, onRate }) => {
  const [rating, setRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleRate = (value) => {
    if (!hasRated) {
      setRating(value);
      setHasRated(true);
      onRate(value);
    }
  };

  return (
    <div className="rating-system text-center my-4">
      <h5 className="mb-3">Bu yazıyı değerlendirin</h5>
      <div className="stars d-flex justify-content-center gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`btn btn-link p-0 ${star <= rating ? 'text-warning' : 'text-muted'}`}
            onClick={() => handleRate(star)}
            disabled={hasRated}
          >
            <i className="bi bi-star-fill fs-4"></i>
          </button>
        ))}
      </div>
      {hasRated && (
        <div className="mt-2 text-success">
          Değerlendirmeniz için teşekkürler!
        </div>
      )}
    </div>
  );
};

export default RatingSystem; 