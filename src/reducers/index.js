const reducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_POKEBALL':
            return {
                ...state,
                "pokeballSelected": state.pokeballs.find(item => item.id === Number(action.payload))
            }
        default:
            return state;
    }
}

export default reducer;
