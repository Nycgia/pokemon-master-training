export const selectPokeball = payload => ({
    type: 'SELECT_POKEBALL',
    payload,
});

export const setPokeballHover = payload => ({
    type: 'SET_POKEBALL_HOVER',
    payload,
});

export const clearPokeballHover = () => ({
    type: 'CLEAR_POKEBALL_HOVER'
});
