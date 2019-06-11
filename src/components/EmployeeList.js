import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';


class List extends Component{
    render(){
        return(
            <View style={{marginTop:5}}>
                <Text style={{textAlign:"center"}}>Zeek was here</Text>
                <Text style={{textAlign:"center"}}>Zeek was here</Text>
                <Text style={{textAlign:"center"}}>Zeek was here</Text>
                <Text style={{textAlign:"center"}}>Zeek was here</Text>
                <TouchableOpacity onPress={()=>Actions.employeeDetail()} style={{marginVertical:2,borderColor:"#0078D7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10,backgroundColor:'#2491FF'}}>
                    <Text style={{fontSize:20,textAlign:"center",paddingVertical:5,color:'white'}}>Info</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default List;