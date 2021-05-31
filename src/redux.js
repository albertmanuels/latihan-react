const redux = require('redux')
const createStore = redux.createStore


const initialState = {
    value: 0,
    age: 22,
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_AGE':
            return {
                ...state,
            }
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state
    }
}
// Store
const store = createStore(rootReducer)
console.log(store.getState());

// Action

store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE', newValue: 12})
console.log(store.getState());

// Subscription