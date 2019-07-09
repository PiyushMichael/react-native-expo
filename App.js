import React, {Component} from 'react';
import { Platform,StyleSheet, Text, View } from 'react-native';
import {styles} from './src/styles';
import Generate from './src/generate';

const instructions = Platform.select({
	ios: 'isss an iphone :)',
	android: 'iss an android'
});
type props={};

class App extends Component<props> {
	
	Add(){
		alert('added');
	};
	Sub(){
		alert('subtracted');
	};
	
	render(){
		return (
		<View style={styles.container}>
			<Text style={styles.box}>start working on the app!</Text>
			<Text style={styles.box}>{instructions}</Text>
			<Generate pressAdd={this.Add} pressSub={this.Sub} />
		</View>
		);
	}
}

export default App;