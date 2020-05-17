import React from 'react';
import { connect } from 'react-redux';
import SelectionButton from '../components/SelectionButton';
import '../assets/styles/containers/SelectionButtons.css';

const SelectionButtons = ({buttons}) => {
    return (
        <div className="selection-buttons">
            {buttons.map((value, index) => {
                return <SelectionButton key={index} id={value.id} label={value.label} img={value.img} />
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    "buttons": state.pokeballs
});

export default connect(mapStateToProps, null)(SelectionButtons);
