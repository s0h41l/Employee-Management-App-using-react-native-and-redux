import {EMPLOYEE_DATA_FETCH,EMPLOYEE_UPDATE,EMPLOYEE_DELETED} from '../actions/type';

const INTITAL_STATE={}

export default (state=INTITAL_STATE,action)=>{
    switch(action.type){
        case EMPLOYEE_DATA_FETCH:
            return action.payload
        case EMPLOYEE_DELETED:
            return state;
        default:
            return state;
    }
}