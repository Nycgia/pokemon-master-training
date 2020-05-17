import React from 'react';
import { connect } from 'react-redux';
import { selectPokeball } from '../actions';
import '../assets/styles/components/SelectionButton.css';

const SelectionButton = ({id, label, img, selectPokeball}) => {
    const classSelected = 'selection-button__selected';
    const classNotSelected = 'selection-button__not-selected';

    const modClass = target => {
        const elements = document.querySelectorAll(`.${classSelected}`);
        elements.forEach(element => {
            element.classList.remove(classSelected);
            element.classList.add(classNotSelected);
        });

        target.classList.add(classSelected);
        target.classList.remove(classNotSelected);
    };

    const handleClick = event => {
        const target = event.target;
        if (target.attributes && target.attributes.id) {
            modClass(target);
            selectPokeball(event.target.attributes.id.value);
        }
    };

    return (
        <div className="selection-button" onClick={handleClick}>
            <img className={classNotSelected}
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
