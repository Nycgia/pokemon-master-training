import React from 'react';
import '../assets/styles/components/SelectionButton.css';

const SelectionButton = ({id, label, img}) => {
    return (
        <div className="selection-button">
            <img src={img} alt={label} title={label} />
        </div>
    );
};

export default SelectionButton;
