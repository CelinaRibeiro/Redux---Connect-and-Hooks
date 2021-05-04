const initialState = {
    name: 'Visitante',
    contador: 0
};

const UsarioReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name };
            break;
        case 'INCREMENT_CONTADOR':
            let newCount = state.contador + 1;
            return { ...state, contador:newCount };
            break;
    }

    return state;
};

export default UsarioReducer;