import React from 'react';

const Bio = ({ image, text }) => {

  return (
    <div className="normal">
      <img className="wrap face-img" src={image} alt="Bio" />
      <p>{text}</p>
    </div>
  );
};

export default Bio;