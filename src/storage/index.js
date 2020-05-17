import pokeball from '../assets/images/pokeball.png';
import superball from '../assets/images/superball.png';
import ultraball from '../assets/images/ultraball.png';

const initialState = () => ({
    "pokeballSelected": null,
    "pokeballs": [
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
    ]
});

export default initialState;
