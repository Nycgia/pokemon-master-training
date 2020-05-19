import React from 'react';
import { connect } from 'react-redux';
import { selectPokeball, setPokeballHover, clearPokeballHover } from '../actions';
import SelectionButtons from './SelectionButtons';
import TrainingMainBox from '../components/TrainingMainBox';

const SelectionDifficult = props => {
    const { selected, pokeballs, hover,  selectPokeball, setPokeballHover, clearPokeballHover } = props;

    const handleClick = value => {
        selectPokeball(value);
        clearPokeballHover();
    };

    const handleMouseEnter = value => {
        setPokeballHover(value);
    };

    const handleMouseLeave = () => {
        clearPokeballHover();
    };

    let text = 'Choose one';

    if (hover) {
        text = hover.description;
    } else if (selected) {
        text = `You have selected the '${selected.label}'!`;
    }

    return (
        <>
            <TrainingMainBox text={text} />
            <SelectionButtons 
                buttons={pokeballs}
                handleClick={handleClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />
        </>
    );
}

const mapStateToProps = state => ({
    selected: state.pokeballSelected,
    hover: state.pokeballHover,
    pokeballs: state.pokeballs,
});

const mapDispatchToProps = {
    selectPokeball,
    setPokeballHover,
    clearPokeballHover
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectionDifficult);
