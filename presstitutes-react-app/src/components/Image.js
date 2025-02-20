import React from 'react';

const Image = ({ image, imageAlt, className, embed }) => {
    return (
        <div className={className}>
          {embed ? (
            <embed className="wide-chart" type="text/html" src={image} />
          ) : (
            <img src={image} alt={imageAlt} className="img" />
          )}
        </div>
      );
};

export default Image;