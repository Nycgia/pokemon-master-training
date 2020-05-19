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

export const selectType = payload => ({
    type: 'SELECT_TYPE',
    payload,
});

export const setTypeHover = payload => ({
    type:'SET_TYPE_HOVER',
    payload,
});

export const clearTypeHover = () => ({
    type: 'CLEAR_TYPE_HOVER',
});
