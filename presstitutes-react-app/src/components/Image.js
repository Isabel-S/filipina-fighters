import React from 'react';
import './Image.css';

const Image = ({ image, imageAlt, className }) => {
  return <div className={className}><img src={image} alt={imageAlt} className='img' /></div>;
};

export default Image;