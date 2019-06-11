import {EMAIL_CHANGE,PASS_CHANGE,LOGIN_SUCCESS,LOADING_ON,LOADING_OFF,LOGIN_FAILED} from './type';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const emailChange=(text)=>{
    return{
        type:EMAIL_CHANGE,
        payload:text
    };
};

export const passChange=(text)=>{
    return{
        type:PASS_CHANGE,
        payload:text
    };
};


export const loginUser=({email,password})=>{
    return (dispatch)=>{
        dispatch({type:LOADING_ON,payload:""})
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user=>{
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:user
                });
                dispatch({type:LOADING_OFF,payload:""});
                Actions.main();
            })
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(user=>{
                        dispatch({
                            type:LOGIN_SUCCESS,
                            payload:user
                        })
                        dispatch({type:LOADING_OFF,payload:""});
                        Actions.main();
                    })
                    .catch(()=>{
                        dispatch({
                            type:LOGIN_FAILED,
                            payload:"Auth Failed"
                        });
                        dispatch({type:LOADING_OFF,payload:""});
                        
                    })
                   
            })

    };
};