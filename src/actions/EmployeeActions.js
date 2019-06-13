import {NAME_CHANGE,
    PHONE_CHANGE,
    SHIFT_CHANGE,
    EMPLOYEE_SAVED,
    EMPLOYEE_DATA_FETCH,
    EMPLOYEE_UPDATE,
    CLEAN,UPDATE_SAVED,
    EMPLOYEE_DELETED
} from './type';

import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import {Actions} from 'react-native-router-flux';

export const AddEmployee=({name,phone,shift})=>{
    const {currentUser}=firebase.auth();
    return dispatch=>{
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name,phone,shift})
        .then(()=>{
            Actions.main({type:'reset'});
            dispatch({
                type:EMPLOYEE_SAVED,
                payload:"text"});
        })

    }
}

export const nameChange=(text)=>{
    return{
        type:NAME_CHANGE,
        payload:text
    }
}

export const phoneChange=(text)=>{
    return{
        type:PHONE_CHANGE,
        payload:text
    }
}

export const shiftChange=(text)=>{
    return{
        type:SHIFT_CHANGE,
        payload:text
    }
}

export const employeeDataFetch=()=>{
    return (dispatch)=>{
        const {currentUser}=firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value',snapshot=>{
            dispatch({type:EMPLOYEE_DATA_FETCH,payload:snapshot.val()});
        })
        
    }
}

export const employeeUpdate=({name,phone,shift,uid})=>{
        return{
            type:EMPLOYEE_UPDATE,
            payload:{name,phone,shift,uid}
        }
}

export const cleanFrom=()=>{
    return{
        type:CLEAN,
        payload:""
    }
}


export const SaveChanges=({name,phone,shift,uid})=>{
    return (dispatch)=>{
        const {currentUser}=firebase.auth();
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .set({name,phone,shift})
        .then(()=>{
            Actions.main({type:'reset'});
            dispatch({type:CLEAN,payload:""});
        });
        
    }
}


export const employeeDelete=({uid})=>{
    console.log("jfdkjgflkjgfkljgflkjflkgl");
    return (dispatch)=>{
        const {currentUser}=firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=>{
            dispatch({type:EMPLOYEE_DELETED,payload:""});
            dispatch({type:CLEAN,payload:""});
            Actions.main({type:"reset"});
        })
    }
}