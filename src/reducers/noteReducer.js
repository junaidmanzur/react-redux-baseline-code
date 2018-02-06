import * as types from "../constants/actionTypes"
import initialState from "./initialState"

function notesReducer(state = initialState.notes, action){
    let newCollection;
    switch(action.type){
        case types.GET_NOTES:
            return {...state, collection:action.notes}
        case types.CREATE_NOTE:
            newCollection = state.collection.concat(action.note)
            return {...state, collection:newCollection}
        case types.DELETE_NOTE:
            newCollection = filterArrayByValue(state.collection, action.id)
            return {...state, collection:newCollection}
        default:
            return state
    }
}

function filterArrayByValue(arr, value){
    return arr.filter(item=>{
        return item.id !== value
    })
}

export default notesReducer