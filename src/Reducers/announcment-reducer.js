

function Announcment(state=[],action){
    switch(action.type){
        case "SET_ANNOUNCMENT":
            state=action.announcment
            console.log(action)
            return state
        default:
            return state;
    }
}

export default Announcment;