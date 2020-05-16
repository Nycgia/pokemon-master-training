import React from 'react';
import SelectionButtons from './SelectionButtons';
import '../assets/styles/containers/SelectionTraining.css';
import pokeball from '../assets/images/pokeball.png';
import superball from '../assets/images/superball.png';
import ultraball from '../assets/images/ultraball.png';

const SelectionTraining = () => {
    const buttons = [
        {
            id: 1,
            label: 'Pokeball',
            img: pokeball,
        },
        {
            id: 2,
            label: 'Superball',
            img: superball,
        },
        {
            id: 3,
            label: 'Ultraball',
            img: ultraball,
        },
    ];

    return (
        <>
            <div className="training-main-box">
                <span className="training-main-box__text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officia, fugiat porro sint mollitia excepturi nam.
                </span>
            </div>

            <SelectionButtons buttons={buttons}/>
        </>
    );
}

export default SelectionTraining;
