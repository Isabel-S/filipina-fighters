import React from "react";
import "./ParagraphText.css";

const ParagraphText = ({ items }) => {
    return (
      <>
        {items.map((item, index) => (
          <p key={index} className={item.className}>
            {item.text}
          </p>
        ))}
      </>
    );
  };

export default ParagraphText;