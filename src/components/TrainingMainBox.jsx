import React from 'react';
import '../assets/styles/components/TrainingMainBox.css';

const TrainingMainBox = ({text}) => {
    return (<div className="training-main-box">
        <span className="training-main-box__text">
            {text}
        </span>
    </div>);
};

export default TrainingMainBox;
