import React from 'react';
import SelectionButton from '../components/SelectionButton';
import '../assets/styles/containers/SelectionButtons.css';

const SelectionButtons = ({ buttons, handleClick, handleMouseEnter, handleMouseLeave }) => {
    return (
        <div className="selection-buttons">
            {buttons.map((value, index) => {
                return (
                    <SelectionButton 
                        key={index}
                        id={value.id}
                        label={value.label}
                        img={value.img}
                        handleClick={handleClick}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                )
            })}
        </div>
    );
};

export default SelectionButtons
