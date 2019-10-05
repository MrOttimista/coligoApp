
export function logOut(){
    return{
        type:"LOGOUT"
    }
}

export function logIn(userName){
    return{
        type:"LOGIN",
        userName
    }
}
export function setAnnouncment(announcment){
    return{
        type:"SET_ANNOUNCMENT",
        announcment
    }
}
export function setQuizzes(quizzes){
    return{
        type:"SET_QUIZZES",
        quizzes
    }
}
