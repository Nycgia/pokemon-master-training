import React from 'react';
import { connect } from 'react-redux';
import { selectType, setTypeHover, clearTypeHover } from '../actions';
import SelectionButtons from './SelectionButtons';
import TrainingMainBox from '../components/TrainingMainBox';

const TrainingType = ({trainingTypes, selectType, clearTypeHover, setTypeHover, selected, hover}) => {
    const handleClick = value => {
        selectType(value);
        clearTypeHover();
    };

    const handleMouseEnter = value => {
        setTypeHover(value);
    };

    const handleMouseLeave = () => {
        clearTypeHover();
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
                buttons={trainingTypes}
                handleClick={handleClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
            />
        </>
    );
}

const mapStateToProps = state => ({
    selected: state.trainingSelected,
    hover: state.trainingHover,
    trainingTypes: state.trainingTypes,
});

const mapDispatchToProps = {
    selectType,
    setTypeHover,
    clearTypeHover
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingType);
