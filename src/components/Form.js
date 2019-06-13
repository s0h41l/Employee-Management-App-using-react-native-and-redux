import React,{Component} from 'react';
import {Text,View,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import {emailChange,passChange,loginUser} from '../actions';
import {connect} from 'react-redux';
class Form extends Component{
    onChangeEmail(text){
        this.props.emailChange(text);

    }

    onChangePassword(text){
        this.props.passChange(text);
    }

    login(){
        const {email,password}=this.props;
        this.props.loginUser({email,password});
    }

    showerror(){
        if(this.props.error!=''){
            return(
                <View>
                    <Text style={{textAlign:'center',color:"red",fontSize:18}}>Authentication Failed</Text>
                </View>
            );
        }
    }
    spinner(){
        if(this.props.loading){
            return <ActivityIndicator size={"large"}/>
        }
    }

    render(){
        return(
            <View style={{paddingTop:10,backgroundColor:'white',height:'100%'}}>
                <View style={{marginVertical:2,borderColor:"black",borderWidth:0.5,marginHorizontal:5,borderRadius:20,paddingHorizontal:10}}>
                    <TextInput value={this.props.email} onChangeText={(text)=>this.onChangeEmail(text)} style={{fontSize:18,color:'#424242'}} placeholder={"Email"}/>
                </View> 
                <View style={{marginVertical:2,borderColor:"black",borderWidth:0.5,marginHorizontal:5,borderRadius:20,paddingHorizontal:10}}>
                    <TextInput value={this.props.password} onChangeText={(pass)=>this.onChangePassword(pass)} secureTextEntry={true} style={{fontSize:18,color:'#424242'}} placeholder={"Password"}/>
                </View>
                {this.spinner()}
                {this.showerror()} 
                <TouchableOpacity onPress={this.login.bind(this)} style={{marginVertical:2,borderColor:"#0078D7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10,backgroundColor:'#2491FF'}}>
                    <Text style={{fontSize:20,textAlign:"center",paddingVertical:5,color:'white'}}>SignIn</Text>
                </TouchableOpacity>
                  
            </View>
        )
    }
}

mapStateToProps=state=>{
    return{
        email:state.auth.email,
        password:state.auth.pass,
        error:state.auth.error,
        loading:state.auth.loading
    }
}

export default connect(mapStateToProps,{emailChange,passChange,loginUser})(Form);