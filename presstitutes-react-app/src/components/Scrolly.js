import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import './Scrolly.css';

const Scrolly = ({ props }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  // Determine the section className based on the 'side' prop
  const sectionClassName = `scrolly ${props.side ? 'side-scrolly' : ''}`;

  // Determine the image to display based on the current step index
  // If 'slides' prop exists and has an image for the current step index, use it.
  // Otherwise, use the default 'image' prop.
  const currentContent = props.slides && props.slides.length > currentStepIndex
    ? props.slides[currentStepIndex]
    : props.image;

  return (
    <div style={{ margin: '0 0' }}>
      <section className={sectionClassName} id="scrolly1">
        <figure style={{ position: 'sticky', top: '50vh', transform: 'translateY(-50%)' }}>
        {props.chart ? (
            <embed className="wide-chart" type="text/html" src={currentContent} />
          ) : (
            <img className="ressa-image" src={currentContent} alt={props.imageAlt} />
          )}
        </figure>
        <article>
          <Scrollama offset={0.7} onStepEnter={onStepEnter}>
            {props.stepTexts.map((step, index) => (
              <Step data={index} key={index}>
                <div className={`step ${currentStepIndex === index ? 'active-step' : ''}`}>
                  <p>{step}</p>
                </div>
              </Step>
            ))}
          </Scrollama>
        </article>

        <div className="scrolly-gap"></div>
        <div className="scrolly-gap"></div>
        <div className="scrolly-gap"></div>
      </section>
    </div>
  );
};

export default Scrolly;
