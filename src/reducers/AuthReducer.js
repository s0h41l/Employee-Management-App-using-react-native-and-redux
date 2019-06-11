import {EMAIL_CHANGE,PASS_CHANGE,LOADING_ON,LOADING_OFF,LOGIN_SUCCESS,LOGIN_FAILED,SUCCESS} from '../actions/type';
import {Actions} from 'react-native-router-flux';

const INITIAL_STATE={email:"",pass:"",user:null,loading:false,error:''};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case EMAIL_CHANGE:
            return {...state,email:action.payload};
        case PASS_CHANGE:
            return {...state,pass:action.payload};
        case LOGIN_SUCCESS:
            Actions.list();
            return {...state,user:action.payload,error:''};
        case LOADING_ON:
            return {...state,loading:true}
        case LOADING_OFF:
            return {...state,loading:false}

        case LOGIN_FAILED:
            return {...state,error:action.payload};
        default:
            return state;

    }
}