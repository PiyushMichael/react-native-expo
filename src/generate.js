import React from 'react';
import {StyleSheet,Text,View,TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';

const generate = (props) => {
	return(
		<>
			<TouchableWithoutFeedback onPress={props.pressAdd}>
				<View style={styles.generator}>
					<Text style={{color: '#fff'}}>Add Number</Text>
				</View>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={props.pressSub}>
				<View style={styles.generator}>
					<Text style={{color: '#fff'}}>Subtract Number</Text>
				</View>
			</TouchableWithoutFeedback>
		</>
	);
};

export default generate;