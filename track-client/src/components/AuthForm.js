import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, Input, Text } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Spacer from "./Spacer";
import NavLink from "./NavLink";

const AuthForm = ( { errorMessage, onSubmit, mainButtonText, secondButtonText, navigation, routeName } ) => {

	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	return (
		<View style={ styles.container }>
			<Spacer>
				<Input
					label="Email"
					value={ email }
					onChangeText={ setEmail }
					labelStyle={ styles.label }
					autoCapitalize="none"
					autoCorrect={ false }
					leftIcon={
						<MaterialCommunityIcons name="email-outline" size={ 18 } color="black"/> }
				/>
				<Input
					labelStyle={ styles.label }
					label="Password"
					onChangeText={ setPassword }
					value={ password }
					secureTextEntry={ true }
					autoCapitalize="none"
					autoCorrect={ false }
					leftIcon={
						<MaterialCommunityIcons name="textbox-password" size={ 18 } color="black"/>
					}
				/>
				{
					errorMessage
						? <Text style={ styles.errorMessage }>{ errorMessage }</Text>
						: null
				}
			</Spacer>
			<Spacer>
				<Button
					onPress={ () => onSubmit({ email, password }) }
					title={ mainButtonText }
					type="outline"
					raised
				/>
			</Spacer>
			<NavLink
				navigation={ navigation }
				routeName={ routeName }
				text={ secondButtonText }
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	label: {
		fontSize: 16
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		textAlign: 'center'
	}
})

export default AuthForm;
