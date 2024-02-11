import React, { useState } from 'react';
import './VisualToggle.css';

const VisualToggle = ({ visuals, defaultActiveIndex = null }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleToggleClick = (index) => {
    // If the clicked button's index is the same as the active index, hide the visual and set activeIndex to null.
    // Otherwise, show the clicked visual.
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderVisualContent = (visual) => {
    switch (visual.type) {
      case 'iframe':
        return <iframe src={visual.src} title={visual.label} />;
      case 'embed':
      default:
        return <embed className="wide-visual" type="text/html" src={visual.src} />;
    }
  };

  return (
    <div>
      <div className="toggle-buttons">
        {visuals.map((visual, index) => (
          <button
            key={index}
            className={`toggle-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleToggleClick(index)}
          >
            {visual.label}
          </button>
        ))}
      </div>

      {visuals.map((visual, index) => (
        <div
          key={index}
          className={`visual-container ${activeIndex === index ? 'active' : ''}`}
          style={{ display: activeIndex === index ? 'block' : 'none' }} // Hide the visual if not active
          id={`visual${index}`}
        >
          {renderVisualContent(visual)}
        </div>
      ))}
    </div>
  );
};

export default VisualToggle;
