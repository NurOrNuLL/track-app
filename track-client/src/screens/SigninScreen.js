import React, { useContext } from 'react'
import { NavigationEvents } from 'react-navigation'
import LogoTitle from "../components/LogoTitle";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SigninScreen = ( { navigation } ) => {
	const { state, signIn, clearErrorMessage } = useContext(Context);

	return (
		<>
			<NavigationEvents onWillFocus={ clearErrorMessage }/>
			<AuthForm
				errorMessage={ state.errorMessage }
				mainButtonText="Sign In"
				secondButtonText="Sign Up"
				onNavigation={ () => navigation.navigate('Signup') }
				onSubmit={ signIn }
				navigation={ navigation }
				routeName="Signup"
			/>
		</>
	)
};

SigninScreen.navigationOptions = () => {
	return {
		headerTitle: () => <LogoTitle title="Sign in to Track App"/>,
		headerLeft: () => null
	}
}


export default SigninScreen;
