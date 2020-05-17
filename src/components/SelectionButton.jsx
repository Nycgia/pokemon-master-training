import React from 'react';
import { connect } from 'react-redux';
import { selectPokeball } from '../actions';
import '../assets/styles/components/SelectionButton.css';

const SelectionButton = ({id, label, img, selectPokeball}) => {
    const modClass = target => {
        const elements = document.querySelectorAll('.selection-button__selected');
        elements.forEach(element => {
            element.classList.remove('selection-button__selected');
            element.classList.add('selection-button__not-selected');
        });

        target.classList.add('selection-button__selected');
        target.classList.remove('selection-button__not-selected');
    };

    const handleClick = event => {
        const target = event.target;
        modClass(target);

        if (target.attributes && target.attributes.id) {
            selectPokeball(event.target.attributes.id.value);
            return;
        }
    };

    return (
        <div className="selection-button" onClick={handleClick}>
            <img className="selection-button__not-selected" 
                 src={img}
                 alt={label}
                 title={label}
                 id={id}
                 onClick={handleClick}
            />
        </div>
    );
};

const mapDispatchToProps = {
    selectPokeball,
};

export default connect(null, mapDispatchToProps)(SelectionButton);
