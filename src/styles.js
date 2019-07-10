import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
	scroller:{
		margin: 1
	},
	container: {
		flex: 1,
		paddingTop: 50,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		width: '100%'
	},
	box: {
		backgroundColor: 'green',
		width: '100%',
		marginBottom: 5,
		color: 'white',
		textAlign: 'center',
		padding: 20
	},
	generator: {
		backgroundColor: '#00bcd4',
		margin: 5,
		padding: 10,
		width: '100%',
		alignItems: 'center'
	},
	list: {
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
		marginTop: 10,
		padding: 10,
		fontSize: 20
	},
	text: {
		width: '100%',
		backgroundColor: '#f3f3f3',
		marginTop: 10,
		marginBottom: 10
	},
	user: {
		width: '100%',
		fontSize: 30,
		borderWidth: 1,
		borderColor: '#cecece',
		padding: 10,
		marginTop: 10
	}
});
