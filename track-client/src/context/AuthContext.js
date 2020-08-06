import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import AsyncStorage from "@react-native-community/async-storage";
import { navigate } from "../navigationRef";

const authReducer = ( state, action ) => {
	switch ( action.type ) {
		case 'ADD_ERROR':
			return { ...state, errorMessage: action.payload }
		case 'SING_IN':
			return { errorMessage: '', token: action.payload }
		case 'CLEAR_ERROR_MESSAGE':
			return { ...state, errorMessage: '' }
		case 'SIGN_OUT':
			return { token: null, errorMessage: '' }
		default:
			return state
	}
}

const tryLocalSignIn = dispatch => async () => {
	const token = await AsyncStorage.getItem('token')
	if ( token ) {
		dispatch({ type: 'SING_IN', payload: token })
		navigate('TrackList')
	} else {
		navigate('loginFlow')
	}
}

const signUp = ( dispatch ) => async ( { email, password } ) => {
	try {
		const response = await trackerApi.post('/signup', { email, password })
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'SING_IN', payload: response.data.token })
		navigate('TrackList')
	} catch ( e ) {
		dispatch({ type: 'ADD_ERROR', payload: 'Something wrong...try again' })
	}
}

const signIn = ( dispatch ) => async ( { email, password } ) => {
	try {
		const response = await trackerApi.post('/signin', { email, password })
		await AsyncStorage.setItem('token', response.data.token);
		dispatch({ type: 'SING_IN', payload: response.data.token })
		navigate('TrackList')
	} catch ( e ) {
		dispatch({ type: 'ADD_ERROR', payload: 'Something wrong...try again' })
	}
}

const signOut = ( dispatch ) => async () => {
	await AsyncStorage.removeItem('token')
	dispatch({ type: 'SIGN_OUT' })
	navigate('loginFlow')
}

const clearErrorMessage = dispatch => () => {
	dispatch({ type: 'CLEAR_ERROR_MESSAGE' })
}

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn },
	{ token: null, errorMessage: '' }
)