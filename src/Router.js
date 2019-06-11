import React from 'react';
import {Router,Scene, Actions} from 'react-native-router-flux';
import Form from './components/Form';
import EmployeeList from './components/EmployeeList';
import EmployeeInfo from './components/EmployeInfo';
import CreateEmployeeForm from './components/CreateEmployeeForm';

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
                    <Scene key="employeeDetail"
                        component={EmployeeInfo}
                        rightTitle="Update"onRight={()=>alert("Hosla!")}
                        title="Employee Info"/>
                    <Scene key="employeeCreate" component={CreateEmployeeForm} title="Add Employee"/>
                    
                </Scene>
            </Scene>   
        </Router>

    );
};

export default RouterComponent;