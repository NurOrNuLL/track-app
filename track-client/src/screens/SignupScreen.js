import React, { useContext } from 'react'
import { NavigationEvents } from 'react-navigation'

import { Context } from "../context/AuthContext";
import LogoTitle from "../components/LogoTitle";
import AuthForm from "../components/AuthForm";

const SignupScreen = ( { navigation } ) => {

	const { state, signUp, clearErrorMessage } = useContext(Context);

	return (
		<>
			<NavigationEvents onWillFocus={ clearErrorMessage }/>
			<AuthForm
				errorMessage={ state.errorMessage }
				mainButtonText="Sign Up"
				secondButtonText="Sign In"
				onNavigation={ () => navigation.navigate('Signin') }
				onSubmit={ signUp }
				navigation={ navigation }
				routeName="Signin"
			/>
		</>
	)
};


SignupScreen.navigationOptions = () => {
	return {
		headerTitle: () => <LogoTitle title="Sign up to Track App"/>,
		headerLeft: () => null
	}
}

export default SignupScreen;
