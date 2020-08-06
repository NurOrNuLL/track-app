import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";

const TrackListScreen = ( { navigation } ) => {
	return (
		<View style={{flex: 1, backgroundColor: 'white'}}>
			<SafeAreaView forceInset={ { top: "always" } }>
				<Spacer>
					<Text h4 style={ { textAlign: 'center' } }> Track list</Text>
				</Spacer>
				<Spacer>
					<Button
						title="Go to Detail"
						onPress={ () => navigation.navigate('TrackDetail') }
					/>
				</Spacer>
			</SafeAreaView>
		</View>
	);
};

const styles = StyleSheet.create({})

TrackListScreen.navigationOptions = () => {
	return {
		headerShown: false
	}
}

export default TrackListScreen;
