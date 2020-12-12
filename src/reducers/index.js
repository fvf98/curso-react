const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            const item = state.myList.find(list => list.id === action.payload.id)
            if (item) return state;
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;