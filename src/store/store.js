import { createStore ,combineReducers} from 'redux'
import Auth from "../Reducers/authentication-reducer";
import Announcment from "../Reducers/announcment-reducer";
import Quizzes from "../Reducers/quizzes-reducer";


let reducers=  combineReducers({
    Auth,
    Announcment,
    Quizzes
})
const store = createStore(reducers)

export default store;