import React from 'react';

// Define the NormalBox component
const NormalBox = ({ boxProps }) => {
  const { boxTitle, boxText } = boxProps; // Destructure the boxProps object

  return (
    <div className="normal box">
      <p className="box-title">{boxTitle}</p>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

export default NormalBox;