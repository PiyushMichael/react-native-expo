import React, {Component} from 'react';
import {Platform,StyleSheet, Text, View,ScrollView } from 'react-native';
import {styles} from './src/styles';
import Generate from './src/generate';
import Lister from './src/lister';
import Input from './src/input';
import UserList from './src/user-list';
import Pick from './src/pick';

const instructions = Platform.select({
	ios: 'isss an iphone :)',
	android: 'iss an android'
});
type props={};

class App extends Component<props> {
	state = {
		text: 'enter text here...',
		list: [20,87,43],
		users: ['john','james','popeye']
	};
	
	Add = () => {
		const random = Math.floor(Math.random()*100)+10;
		this.setState({list: [...this.state.list,random]});
	};
	Sub = (id) => {
		const arr = this.state.list.filter((item,index) => {
			return id != index;
		});
		this.setState({list: arr});
	};
	typed = (event) => {
		this.setState({text: event});
	};
	addUser = () => {
		this.setState({users: [...this.state.users,this.state.text]});
	};
	
	render(){
		return (
		<ScrollView style={styles.scroller}>
			<View style={styles.container}>
				<Text style={styles.box}>start working on the app!</Text>
				<Text style={styles.box}>{instructions}</Text>
				<Pick />
				<Input AddUser={this.addUser} typing={this.typed} value={this.state.text} />
				<UserList  users={this.state.users} />
				<Generate pressAdd={this.Add} pressSub={this.Sub} />
				<Lister typing={this.typed} remove={this.Sub} list={this.state.list}/>
			</View>
		</ScrollView>
		);
	}
}

export default App;