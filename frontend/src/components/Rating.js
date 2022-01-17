import React from 'react';

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      <span>
        {Array(5)
          .fill()
          .map((_, index) => (
            <i
              key={index}
              style={{ color }}
              className={
                value >= index + 1
                  ? 'fas fa-star'
                  : value >= index + 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          ))}
      </span>

      <span>{text && text}</span>
    </div>
  );
}

export default Rating;
