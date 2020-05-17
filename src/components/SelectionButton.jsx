import React from 'react';
import { connect } from 'react-redux';
import { selectPokeball, setPokeballHover, clearPokeballHover} from '../actions';
import '../assets/styles/components/SelectionButton.css';

const SelectionButton = (props) => {
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
            props.selectPokeball(target.attributes.id.value);
            props.clearPokeballHover();
        }
    };

    const handleMouseEnter = event => {
        const target = event.target;
        if (target.attributes && target.attributes.id) {
            props.setPokeballHover(target.attributes.id.value);
        }
    };

    return (
        <div className="selection-button" onClick={handleClick}>
            <img className={classNotSelected}
                 src={props.img}
                 alt={props.label}
                 title={props.label}
                 id={props.id}
                 onClick={handleClick}
                 onMouseOver={handleMouseEnter}
                 onMouseLeave={props.clearPokeballHover}
            />
        </div>
    );
};

const mapDispatchToProps = {
    selectPokeball,
    setPokeballHover,
    clearPokeballHover
};

export default connect(null, mapDispatchToProps)(SelectionButton);
