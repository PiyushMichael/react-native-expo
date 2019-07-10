import React, {Component} from 'react';
import {StyleSheet,Text,View,TextInput,Button} from 'react-native';
import {styles} from './styles';

const Input = (props) => {
	return <View style={{width: '100%'}}>
		<TextInput style={styles.text} onChangeText={(event) => props.typing(event)} value={props.value} />
		<Button onPress={props.AddUser} title="Add User" />
	</View>
}

export default Input;