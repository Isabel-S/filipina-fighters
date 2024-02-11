import React from 'react';

const NormalBox = ({ boxProps }) => {
  const { boxTitle, boxText } = boxProps;

  return (
    <div className="normal box">
      <p className="box-title">{boxTitle}</p>
      {boxText.map((item, index) => (
        <p key={index} className={item.class || ''}>{item.text}</p>
      ))}
    </div>
  );
};

export default NormalBox;
