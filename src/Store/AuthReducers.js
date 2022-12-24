import { createSlice } from "@reduxjs/toolkit";

const initialStateAuthState = {isAuth:false , token:null}
const AuthSlice =  createSlice({
    name:'Authentication',
    initialState:initialStateAuthState,
    reducers:{
       login(state) {
          state.isAuth = true
       },

       logout(state) {
         state.isAuth=false
       },
      
       token(state,action){
        state.token =  action.payload
       }
    }
})

export default AuthSlice;


export const auth = AuthSlice.actions



