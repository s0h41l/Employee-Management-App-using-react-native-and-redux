import React,{Component} from 'react';
import {View,Text,TouchableOpacity,ListView,FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {employeeDataFetch} from '../actions/EmployeeActions';
import _ from 'lodash';
import Listitem from './ListItem'


class List extends Component{
    componentWillMount(){
        this.props.employeeDataFetch();
        this.createDataSource(this.props);

    }
    componentWillReceiveProps(nextprop){
        this.createDataSource(nextprop);
    }

    createDataSource({employees}){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(employees),
        };
    }
    renderRow(employee){
        return(
            <Listitem employee={employee}/>
        )
    }

    render(){
        console.log(this.props.employees);
        return(
            <View style={{marginTop:5}}>
        <ListView
            enableEmptySections
             dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
        />

        </View>
        )
    }
}

const mapStateToProps=state=>{
    const employees=_.map(state.employeeCrud,(val,uid)=>{
        return {...val,uid}
    })
    return {employees};
}

export default connect(mapStateToProps,{employeeDataFetch})(List);