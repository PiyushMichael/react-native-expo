import React,{Component} from 'react';
import {View,Text,Button,Modal,StyleSheet} from 'react-native';
import {styles} from './styles';

class ModalCom extends Component{
	state={modal: false};
	
	handleModal = () => {
		this.setState({modal: !this.state.modal ? true : false});
	};
	closeModal = () => {
		this.setState({modal: false});
	};
	
	render(){
		return (
			<View style={{width: '100%', marginBottom: 20}}>
				<Text>modal</Text>
				<Button title="Open Modal" onPress={this.handleModal} />
				<Modal animationType="slide" transparent={true} visible={this.state.modal}>
					<View style={styles.modal}>
						<Text>Modal content</Text>
					</View>
					<Button title="close" onPress={this.closeModal} />
				</Modal>
			</View>
		);
	}
}

export default ModalCom;