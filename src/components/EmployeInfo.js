import React,{Component} from 'react';
import {View,Text} from 'react-native';

class Info extends Component{
    render(){
        return(
            <View style={{marginTop:5}}>
                <Text style={{textAlign:'center'}}>Sohail Khan</Text>
                <Text style={{textAlign:'center'}}>UET, Lahore</Text>
            </View>
        )
    }
}

export default Info;