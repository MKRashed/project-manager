const initialProduct = {
    taskData:[],
}

const taskReducer  = (state = initialProduct, action) => {   

    switch (action.type) {

        case 'ADD_TASK':
            return {
                ...state,
                taskData: [...state.taskData, action.payload],
                }

        case 'DELETE_TASK':
            return {
                ...state,
                taskData: state.taskData.filter((task, index) => index !== action.payload),
                }
                
        case 'UPDATE_TASK':
            return {
                ...state,
                taskData: state.taskData.map((task, index) => index === action.payload.index ?
                {...task, [action.payload.name]: action.payload.value} : task)}
                                
        default:
            return state
                                    
                        
    }
}

export {  taskReducer,  initialProduct }

