import React from "react"

const AuthContext =  React.createContext({
       signUp:() => {},
       login: () => {}
})

export const AuthContextProvider = (props) => {
   const signUpHandler = async(obj) => {
   }
 
   const loginHandler =  () => {

};

   const AutchCtx = {
        signUp:signUpHandler,
        login:loginHandler
    }

    return <AuthContext.Provider value={AutchCtx}>{props.children}</AuthContext.Provider>
};

export default AuthContext;