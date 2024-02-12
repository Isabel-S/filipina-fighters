import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

import './Scrolly.css';
import './SideScrolly.css';

const SideScrolly = ({props}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return ( 
    
    <div style={{ margin: '0 0'}}>
        <section className="scrolly side-scrolly" id="scrolly1">
            <figure className = "figure" style={{ position: 'sticky', top: '50vh', transform: 'translateY(-50%)' }}>
                {/* Assume titleImage is imported or defined elsewhere */}
                <img className="ressa-image" src={props.image} alt={props.imageAlt}/>
            </figure>
            <article>
                <Scrollama offset={0.33} onStepEnter={onStepEnter} debug>
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

export default SideScrolly;