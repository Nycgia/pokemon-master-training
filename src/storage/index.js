import pokeball from '../assets/images/pokeball.png';
import superball from '../assets/images/superball.png';
import ultraball from '../assets/images/ultraball.png';

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
    ]
});

export default initialState;
