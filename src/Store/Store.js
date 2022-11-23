import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {  
      state.showCounter = !state.showCounter;
    },
  },
});

const initialState = {auth:false}

const authSlice = createSlice({
    name:'Authentication',
    initialState: initialState,
    reducers: {
        login(state){
            state.auth = true;
        },
        logout(state){
           state.auth = false;
        }
    }
})

const store = configureStore({
    reducer : {counter:counterSlice.reducer, auth:authSlice.reducer}
});

 export const auth = authSlice.actions
 export const counterAction = counterSlice.actions

export default store;