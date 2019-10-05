
function Quizzes(state=[],action){
    switch(action.type){
        case "SET_QUIZZES":
            state=action.quizzes
            console.log(action)
            return state
        default:
            return state;
    }
}

export default Quizzes;