const initialSearch = {
    search: '',
}

const  searchReducer = (state , action) => { 
    switch (action.type) { 

        case  'SEARCH':
            return { ...state, search: action.payload }

        default:
            return state
    }
}


export { initialSearch, searchReducer }

