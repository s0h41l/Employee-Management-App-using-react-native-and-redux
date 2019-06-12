import {EMPLOYEE_DATA_FETCH} from '../actions/type';

const INTITAL_STATE={}

export default (state=INTITAL_STATE,action)=>{
    switch(action.type){
        case EMPLOYEE_DATA_FETCH:
            return action.payload
        default:
            return state;
    }
}