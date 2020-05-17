const reducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_POKEBALL':
            return {
                ...state,
                "pokeballSelected": state.pokeballs.find(item => item.id === Number(action.payload))
            }
        case 'SET_POKEBALL_HOVER':
            return {
                ...state,
                "pokeballHover": state.pokeballs.find(item => item.id === Number(action.payload))
            }
        case 'CLEAR_POKEBALL_HOVER':
            return {
                ...state,
                "pokeballHover": null,
            }
        default:
            return state;
    }
}

export default reducer;
