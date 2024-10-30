import {ADD_TODO, REMOVE_TODO} from "./action.types"

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]  //we are adding  Todo to the state
           
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload); //filter returns new array containing the values which mets the condition
           
        default:
            return state;
    }   
}