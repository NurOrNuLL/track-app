import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";

const NavLink = ( { navigation, text, routeName } ) => {
	return (
		<Spacer>
			<TouchableOpacity
				onPress={ () => {
					navigation.navigate(routeName)
				} }
			>
				<Text style={ styles.text }>
					{ text }
				</Text>
			</TouchableOpacity>
		</Spacer>
	);
};

const styles = StyleSheet.create({
	text: {
		color: '#4288d6',
		fontSize: 17,
		textAlign: 'center',
		marginTop: 5,
		fontWeight: 'bold'
	}
})

export default withNavigation(NavLink);
