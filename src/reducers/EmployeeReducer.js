import {NAME_CHANGE,SHIFT_CHANGE,PHONE_CHANGE,EMPLOYEE_SAVED,EMPLOYEE_UPDATE,CLEAN} from '../actions/type';
const INITIAL_STATE={name:"",phone:"",shift:"Sunday"};
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case NAME_CHANGE:
            return {...state,name:action.payload}
        case PHONE_CHANGE:
            return {...state,phone:action.payload}
        case SHIFT_CHANGE:
            return {...state,shift:action.payload}
        case EMPLOYEE_SAVED:
            return INITIAL_STATE
        case EMPLOYEE_UPDATE:
            return action.payload;
        case CLEAN:
            return INITIAL_STATE;
        default:
            return state;
    };

};