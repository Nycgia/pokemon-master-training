import React from 'react';
import { connect } from 'react-redux';
import SelectionButtons from './SelectionButtons';
import '../assets/styles/containers/SelectionTraining.css';

const SelectionTraining = ({ pokeball, hover }) => {
    let text = 'Choose one';

    if (hover) {
        text = hover.description;
    } else if (pokeball) {
        text = `You are selected the '${pokeball.label}'!`;
    }

    return (
        <>
            <div className="training-main-box">
                <span className="training-main-box__text">
                    {text}
                </span>
            </div>

            <SelectionButtons />
        </>
    );
}

const mapStateToProps = state => ({
    pokeball: state.pokeballSelected,
    hover: state.pokeballHover,
});

export default connect(mapStateToProps, null)(SelectionTraining);
