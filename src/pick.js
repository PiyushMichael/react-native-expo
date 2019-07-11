import React,{Component} from 'react';
import {View,Text,Picker,Slider} from 'react-native';

class Pick extends Component {
	state={lang: 'eng',slide: 40}
	render(){
		return(
			<View style={{width: '100%'}}>
				<Picker 
					style={{width: '100%'}}
					selectedValue={this.state.lang}
					onValueChange={(val,index) => this.setState({lang: val})}
				>
					<Picker.Item label="English" value="eng"/>
					<Picker.Item label="Hindi" value="hin"/>
					<Picker.Item label="Malayalam" value="mal"/>
				</Picker>
				<Text>set slider: {this.state.slide}</Text>
				<Slider 
					style={{width: '100%'}}
					value={this.state.slide}
					minimumValue={0}
					maximumValue={100}
					onValueChange={(val) => this.setState({slide: val})}
				/>
			</View>
		);
	}
}

export default Pick;