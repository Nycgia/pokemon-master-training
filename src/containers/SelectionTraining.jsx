import React from 'react';
import SelectionButtons from './SelectionButtons';
import '../assets/styles/containers/SelectionTraining.css';

const SelectionTraining = () => {
    const buttons = [
        {
            id: 1,
            label: 'label1',
            img: 'img1.png',
        },
        {
            id: 2,
            label: 'label2',
            img: 'img2.png',
        },
        {
            id: 3,
            label: 'label3',
            img: 'img3.png',
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
