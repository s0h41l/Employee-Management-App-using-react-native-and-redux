import React,{Component} from 'react';
import {View,Text,TouchableOpacity,ListView,TextInput,Picker} from 'react-native';
import {connect} from 'react-redux';
import {phoneChange,nameChange,shiftChange,AddEmployee,cleanFrom} from '../actions/EmployeeActions';


class CreateEmployee extends Component{
    componentWillMount(){
        this.props.cleanFrom();
    }
    render(){
        return(
            <View style={{paddingTop:10,backgroundColor:'white',height:'100%'}}>
                <View  style={{marginVertical:2,borderColor:"#B7B7B7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10}}> 
                    <TextInput value={this.props.name} onChangeText={(text)=>this.props.nameChange(text)} style={{fontSize:18,color:'#424242'}} placeholder={"Name"}/>
                </View> 
                <View style={{marginVertical:2,borderColor:"#B7B7B7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10}}> 
                    <TextInput keyboardType="phone-pad" value={this.props.phone} onChangeText={(text)=>this.props.phoneChange(text)} style={{fontSize:18,color:'#424242'}} placeholder={"+92xxxxxxxxxx"}/>
                </View>
                <View style={{marginVertical:2}}>
                    <Picker default selectedValue={this.props.shift} onValueChange={(value,index)=>this.props.shiftChange(value)} mode="dropdown" style={{marginHorizontal:8}}>
                        <Picker.Item label="Sunday" value="Sunday"/>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                    </Picker>
                </View>
                <TouchableOpacity onPress={()=>{
                    const {name,phone,shift}=this.props;
                    this.props.AddEmployee({name,phone,shift});
                    
                }}  style={{marginVertical:2,borderColor:"#B7B7B7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10,backgroundColor:'#2491FF'}}>
                    <Text style={{fontSize:20,textAlign:"center",paddingVertical:5,color:'white'}}>Save</Text>
                </TouchableOpacity>  
            </View>
        )
    }
}
mapStateToProps=state=>{
    return{
        name:state.employee.name,
        phone:state.employee.phone,
        shift:state.employee.shift,
    }
}

export default connect(mapStateToProps,{phoneChange,nameChange,shiftChange,AddEmployee,cleanFrom})(CreateEmployee);