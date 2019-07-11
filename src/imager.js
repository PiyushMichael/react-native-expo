import React,{Component} from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {styles} from './styles';
import Meme from '../assets/fieldreact.jpg';

const Imager = (props) => {
	return (<>
		<Image resizeMode="contain" style={styles.imager} source={Meme} />
		<Image 
			resizeMode="contain"
			style={styles.imager1}
			source={{uri: 'https://picsum.photos/800/800'}} 
		/>
	</>);
};

export default Imager;