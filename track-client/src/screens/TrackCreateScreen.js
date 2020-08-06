import '../_mockLocation'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from "react-navigation"
import { Text } from 'react-native-elements'
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from "expo-location"

import Spacer from "../components/Spacer";
import Map from "../components/Map";

const TrackCreateScreen = () => {
	const [ err, setErr ] = useState(null);
	const startWatching = async () => {
		try {
			await requestPermissionsAsync();
			await watchPositionAsync({
				accuracy: Accuracy.BestForNavigation,
				timeInterval: 1000,
				distanceInterval: 10
			}, ( location ) => {
				console.log(location)
			});
		} catch ( e ) {
			setErr(e)
		}
	}

	useEffect(() => {
		startWatching()
	}, []);

	return (
		<SafeAreaView forceInset={ { top: "always" } }>
			<Spacer>
				<Text h4 style={ { textAlign: 'center' } }> Track create</Text>
			</Spacer>
			<Map/>
			{
				err ? <Text>Please enable location services</Text> : null
			}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({})
export default TrackCreateScreen;
