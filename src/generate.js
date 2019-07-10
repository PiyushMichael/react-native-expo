import React from 'react';
import {StyleSheet,Text,View,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const generate = (props) => {
	return	(<>
			<TouchableOpacity style={styles.generator} onPress={props.pressAdd}>
				<View>
					<Text style={{color: '#fff'}}>Add Number in list</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.generator}>
				<View>
					<Text style={{color: '#fff'}}>Remove Number from list</Text>
				</View>
			</TouchableOpacity>
		</>
	);
};

export default generate;