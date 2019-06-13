import React,{Component} from 'react';
import {View,Text,TouchableOpacity,ListView,TextInput,Picker} from 'react-native';
import {connect} from 'react-redux';
import {phoneChange,nameChange,shiftChange,SaveChanges,employeeDelete} from '../actions/EmployeeActions';
import communications from 'react-native-communications';
import Confirm from './Confirm';

class CreateEmployee extends Component{
    state={deleteModal:false}
    confirmDelete(){
        this.setState({deleteModal:true});
    }
    update(){
        const {name,phone,shift,uid}=this.props;
        this.props.SaveChanges({name,phone,shift,uid});
    }

    noDelete(){
        this.setState({deleteModal:false});
    }

    delete(){
        console.log("dfhdjfhjkdfhjkdfh");
        const {uid}=this.props;
        this.props.employeeDelete({uid});
        
    }  
    render(){
        return(
            <View style={{paddingTop:10,backgroundColor:'white',height:'100%'}}>
                <Confirm visible={this.state.deleteModal} onPressNo={this.noDelete.bind(this)} onPressYes={this.delete.bind(this)}/>
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
                <TouchableOpacity onPress={()=>this.update()}  style={{marginVertical:2,borderColor:"#B7B7B7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10,backgroundColor:'#287FD0'}}>
                    <Text style={{fontSize:20,textAlign:"center",paddingVertical:5,color:'white'}}>Update</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>{
                    communications.text(this.props.phone,`Your work shift is on ${this.props.shift}.\n ZeekTech`);
                    
                }}  style={{marginVertical:2,borderColor:"#B7B7B7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10,backgroundColor:'#2BDB6B'}}>
                    <Text style={{fontSize:20,textAlign:"center",paddingVertical:5,color:'white'}}>Message</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>this.confirmDelete()}  style={{marginVertical:2,borderColor:"#B7B7B7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10,backgroundColor:'#FF3737'}}>
                    <Text style={{fontSize:20,textAlign:"center",paddingVertical:5,color:'white'}}>Delete</Text>
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
        uid:state.employee.uid
    }
}

export default connect(mapStateToProps,{phoneChange,nameChange,shiftChange,SaveChanges,employeeDelete})(CreateEmployee);