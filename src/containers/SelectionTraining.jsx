import React from 'react';
import { connect } from 'react-redux';
import SelectionButtons from './SelectionButtons';
import '../assets/styles/containers/SelectionTraining.css';

const SelectionTraining = ({ pokeball }) => {
    return (
        <>
            <div className="training-main-box">
                <span className="training-main-box__text">
                    {(pokeball) 
                    ? `You are selected the '${pokeball.label}'!`
                    : `Select a pokeball`
                }
                </span>
            </div>

            <SelectionButtons />
        </>
    );
}

const mapStateToProps = state => ({
    pokeball: state.pokeballSelected,
});

export default connect(mapStateToProps, null)(SelectionTraining);
