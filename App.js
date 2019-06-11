/**
 * Sample React Native App
 * https://github.com/facebook/react-native
*/
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import Router from './src/Router';


export default class App extends Component{
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyD7DhXDuiLI1VgCTfH0dfv2GRq6fRvWsHo",
      authDomain: "multiscreenlearning.firebaseapp.com",
      databaseURL: "https://multiscreenlearning.firebaseio.com",
      projectId: "multiscreenlearning",
      storageBucket: "",
      messagingSenderId: "310235556355",
      appId: "1:310235556355:web:b4c328133d9eefab"
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Router/>
      </Provider>
    );
  }
}
