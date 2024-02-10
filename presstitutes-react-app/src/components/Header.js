import React from 'react';
import './Header.css'; 
import titleImage from '../img/sq (1).jpg'; 

function Header() {
  return (
      <div className="title-container">
        <div className="title-text-container">
          <div className="title-text-overlapping">
            <h1 className="title-text-main-hidden">#Presstituti</h1>
            <h1 className="title-text-main">#Presstitute:</h1>
          </div>
          <div className="title-text-static">
            <p>________________________________________________</p>
            <h1 className="title-text-sub">Online Violence Faced By Filipina Journalists and Fighting Back with Data</h1>
            <p className="title-text-author-date">By Isabel Sieh | Aug 20</p>
            <p>________________________________________________</p>
          </div>
        </div>
        <div className="title-image-container">
          <img className="title-image" src={titleImage} alt="Six Filipina Journalists" />
        </div>
      </div>
  );
}

export default Header;