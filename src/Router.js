import React from 'react';
import {Router,Scene, Actions} from 'react-native-router-flux';
import Form from './components/Form';
import EmployeeList from './components/EmployeeList';
import CreateEmployeeForm from './components/CreateEmployeeForm';
import EmployeeUpdate from './components/EmployeeUpdate';

const RouterComponent=()=>{
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={Form} title="Login Page" initial/>
                </Scene>
                <Scene key="main">
                    <Scene key="list"
                        rightTitle="Add"
                        onRight={()=>Actions.employeeCreate()}
                        component={EmployeeList}
                        title="Employee List"
                      />
                    <Scene key="employeeCreate" component={CreateEmployeeForm} title="Add Employee"/>
                    <Scene key="employeeUpdate" component={EmployeeUpdate} title="Update Employee"/>
                    
                </Scene>
            </Scene>   
        </Router>

    );
};

export default RouterComponent;