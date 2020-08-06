import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const LogoTitle = ( { title } ) => {
	return (
		<View style={ { flexDirection: 'row', justifyContent: 'center' } }>
			<Image
				source={ require('../../assets/logo.png') }
				style={ { width: 25, height: 25, marginRight: 10 } }
			/>
			<Text style={ { fontSize: 20 } }>{ title }</Text>
		</View>
	)
}


export default LogoTitle;
