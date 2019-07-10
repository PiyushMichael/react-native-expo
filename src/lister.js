import React from 'react';
import {StyleSheet,Text,View,TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';

const Lister = (props) => {
	return props.list.map((num,id) => (
		<TouchableWithoutFeedback onPress={() => props.remove(id)} key={id}>
			<Text style={styles.list}>{num}</Text>
		</TouchableWithoutFeedback>
	));
};

export default Lister;