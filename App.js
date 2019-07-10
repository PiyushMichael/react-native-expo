import React, {Component} from 'react';
import { Platform,StyleSheet, Text, View } from 'react-native';
import {styles} from './src/styles';
import Generate from './src/generate';
import Lister from './src/lister';
import Input from './src/input';

const instructions = Platform.select({
	ios: 'isss an iphone :)',
	android: 'iss an android'
});
type props={};

class App extends Component<props> {
	state = {
		text: 'enter text here...',
		list: [20,87,43]
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
	
	render(){
		return (
		<View style={styles.container}>
			<Text style={styles.box}>start working on the app!</Text>
			<Text style={styles.box}>{instructions}</Text>
			<Generate pressAdd={this.Add} pressSub={this.Sub} />
			<Input typing={this.typed} value={this.state.text}/>
			<Lister typing={this.typed} remove={this.Sub} list={this.state.list}/>
		</View>
		);
	}
}

export default App;