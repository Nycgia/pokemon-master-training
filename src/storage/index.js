import pokeball from '../assets/images/pokeball.png';
import superball from '../assets/images/superball.png';
import ultraball from '../assets/images/ultraball.png';

import types from '../assets/images/types.png';
import whoIsThat from '../assets/images/whoIsThat.png';

const initialState = () => ({
    "pokeballSelected": null,
    "pokeballHover": null,
    "pokeballs": [
        {
            id: 1,
            label: 'Pokeball',
            img: pokeball,
            description: 'Basic training, for beginners like you.',
        },
        {
            id: 2,
            label: 'Superball',
            img: superball,
            description: 'Mid-level training, do you think you have what it takes?',
        },
        {
            id: 3,
            label: 'Ultraball',
            img: ultraball,
            description: 'Advanced training, if you hesitate, you better not even try.',
        },
    ],
    "trainingSelected": null,
    "trainingHover": null,
    "trainingTypes": [
        {
            id: 1,
            label: 'Type resistance and weaknesses',
            img: types,
            description: 'Do you know all types of pokemon? Do you think you know all their strengths and weaknesses? Test yourself.',
        },
        {
            id: 2,
            label: 'Who\'s that pokemon?',
            img: whoIsThat,
            description: 'The classic game "Who is that pokemon", challenge yourself by discovering different types of pokemon with different tests and not just their silhouette.',
        },
    ]
});

export default initialState;
