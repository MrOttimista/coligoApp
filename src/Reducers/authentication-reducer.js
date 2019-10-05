
const initialState ={
    isLoggedIn:false,
    userName:""
}

function Auth(state=initialState,action){
    switch(action.type){
        case "LOGIN":
            state.isLoggedIn=true;
            state.userName=action.userName
            return state
        case "LOGOUT":
            state.isLoggedIn=false
            state.userName="";
            return state
        default:
            return state;
    }
}

export default Auth;
