import React from 'react';

const HeadingText = ({ className, text }) => {
  // Determine the heading type based on className
  const HeadingTag = "h" + className[7]

  return <HeadingTag className={`wide ${className}`} id={text}>{text}</HeadingTag>;
}

export default HeadingText;