import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {styles} from './styles';

const generate = () => {
	return(
		<View style={styles.generator}>
			<Text style={{color: '#fff'}}>Add Number</Text>
		</View>
	);
};

export default generate;