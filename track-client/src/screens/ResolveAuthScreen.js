import React, { useEffect, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from "../context/AuthContext";

const ResolveAuthScreen = () => {

	const { tryLocalSignIn } = useContext(Context);

	useEffect(() => {
		tryLocalSignIn()
	}, []);

	return null
};

const styles = StyleSheet.create({})

export default ResolveAuthScreen;
