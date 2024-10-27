const initialSearch = {
    search: '',
}

const  searchReducer = (state = initialSearch, action) => { 
    switch (action.type) { 

        case  'SEARCH':
            return { ...state, search: action.payload }

        default:
            return state
    }
}


export { searchReducer, initialSearch }

