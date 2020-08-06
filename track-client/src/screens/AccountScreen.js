import React, { useContext } from 'react'
import { SafeAreaView } from "react-navigation";
import { Context } from "../context/AuthContext";
import { Button, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const AccountScreen = () => {

	const { signOut } = useContext(Context);

	return (
		<SafeAreaView forceInset={{top: "always"}}>
			<Spacer>
				<Text h4 style={ { textAlign: 'center' } }> Account settings </Text>
			</Spacer>
			<Spacer>
				<Button title="Sign Out" onPress={ signOut }/>
			</Spacer>
		</SafeAreaView>
	);
};


export default AccountScreen;
