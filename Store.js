import { createStore } from "redux";

const reducerFunction = (state = {counter:0}, action) => {
    if(action.type === 'incremenet')
    {
        return {counter:state.counter+1}
    }

    if(action.type === 'decrement')
    {
        return {counter:state.counter-1}
    }

    if(action.type === 'decrement')
    {
        return {counter:state.counter-1}
    }

    if(action.type === 'incremenetByTwo')
    {
        return {counter:state.counter+2}
    }


    if(action.type === 'decrementByTwo')
    {
        return {counter:state.counter-2}
    }

    return state
};

const store = createStore(reducerFunction);



export default store;