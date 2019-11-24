
import {ADD_ERROR,REMOVE_ERROR} from '../actionTypes';
export default (state={message : null},action) =>{ //this function gonna take 2 this state as well as action //state parameter is the entire state of our app the default state is null 
switch(action.types){ //this gonna check with action.types that is ADD_ERROR or REMOVE_ERROR
    case ADD_ERROR:
        return {...state, message: action.error}; //if the action type is of ADD Error we are gonna return the object of state and the message that is held in action.error basically (  error(payload) of addError of actions/error.js)
    case REMOVE_ERROR:
        return {...state, message: null }; //since the removerError function of actions/error.js has no payload 
    default:
        return state;
  }
}