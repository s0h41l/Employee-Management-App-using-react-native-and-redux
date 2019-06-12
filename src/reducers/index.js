import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';
import employeeCRUDReducer from './EmployeeCrudReducer';
export default combineReducers({
    auth:AuthReducer,
    employee:EmployeeReducer,
    employeeCrud:employeeCRUDReducer
});
