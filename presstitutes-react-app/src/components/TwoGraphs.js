import React from 'react';

const TwoGraphs = ({ srcOne, srcTwo }) => {
  return (
    <div className="two-graphs">
      <embed type="text/html" src={srcOne} />
      <embed type="text/html" src={srcTwo} />
    </div>
  );
};

export default TwoGraphs;
