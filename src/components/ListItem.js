import React,{Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
export default class extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity style={{marginVertical:2,marginHorizontal:10,borderColor:'#B7B7B7',borderWidth:1,padding:5}}>
                    <Text style={{fontSize:18}}>{this.props.employee.name}</Text>
                    <Text style={{fontSize:13}}>{this.props.employee.phone}</Text>
                    <Text style={{fontSize:13}}>shift : {this.props.employee.shift}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}