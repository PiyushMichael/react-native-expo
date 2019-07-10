import React,{Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {styles} from './styles';

class UserList extends Component {
	render(){
		return this.props.users.map((user,id) => (
			<View style={styles.user} key={id}><Text>{user}</Text></View>
		));
	}
}

export default UserList;