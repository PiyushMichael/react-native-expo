import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput} from 'react-native';
import {styles} from './styles';

const Input = (props) => {
	return <View style={{width: '100%',marginLeft:-20}}>
		<Text>HAAALOOOO :)</Text>
		<TextInput style={styles.text} onChangeText={(event) => props.typing(event)} value={props.value} />
	</View>
}

export default Input;