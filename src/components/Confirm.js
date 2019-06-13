
import React from 'react';
import {Text,View,Modal,TouchableOpacity} from 'react-native';
const Confirm=({visible,uid,onPressYes,onPressNo})=>{
    return(
        <View>
            <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
            <View style={{margin:5}}>
                <Text style={{textAlign:"center",fontSize:20,marginBottom:5}}>Are you sure?</Text>
            <TouchableOpacity onPress={onPressYes}  style={{marginVertical:2,borderColor:"#B7B7B7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10,backgroundColor:'#FF3737'}}>
                    <Text style={{fontSize:20,textAlign:"center",paddingVertical:5,color:'white'}}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressNo}  style={{marginVertical:2,borderColor:"#B7B7B7",borderWidth:1,marginHorizontal:5,borderRadius:20,paddingHorizontal:10,backgroundColor:'#287FD0'}}>
                    <Text style={{fontSize:20,textAlign:"center",paddingVertical:5,color:'white'}}>No</Text>
            </TouchableOpacity>
                
                 
            </View>
        </Modal>
        </View>
    );
}

export default Confirm;