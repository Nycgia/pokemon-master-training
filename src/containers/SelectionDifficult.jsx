import React from 'react';
import { connect } from 'react-redux';
import SelectionButtons from './SelectionButtons';
import TrainingMainBox from '../components/TrainingMainBox';

const SelectionDifficult = ({ pokeballSelected, pokeballs, hover }) => {
    let text = 'Choose one';

    if (hover) {
        text = hover.description;
    } else if (pokeballSelected) {
        text = `You have selected the '${pokeballSelected.label}'!`;
    }

    return (
        <>
            <TrainingMainBox text={text} />
            <SelectionButtons buttons={pokeballs}/>
        </>
    );
}

const mapStateToProps = state => ({
    pokeballSelected: state.pokeballSelected,
    hover: state.pokeballHover,
    pokeballs: state.pokeballs,
});

export default connect(mapStateToProps, null)(SelectionDifficult);
