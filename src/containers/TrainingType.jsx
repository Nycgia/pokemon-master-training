import React from 'react';
import { connect } from 'react-redux';
import SelectionButtons from './SelectionButtons';
import TrainingMainBox from '../components/TrainingMainBox';

const TrainingType = ({trainingTypes}) => {
    let text = 'Choose one';

    return (
        <>
            <TrainingMainBox text={text} />
            <SelectionButtons buttons={trainingTypes}/>
        </>
    );
}

const mapStateToProps = state => ({
    trainingTypes: state.trainingTypes,
});

export default connect(mapStateToProps, null)(TrainingType);
