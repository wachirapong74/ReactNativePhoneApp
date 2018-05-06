import axios from 'axios'
import config from '../../configure'

import {
    AsyncStorage
} from 'react-native';

const BASE_URL = config.BASE_URL

export const signUp = (values) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: `${BASE_URL}/users`,
            data: values,
            // headers: { authorization: localStorage.getItem('token') }
        }).then(results => {
            // console.log('sign up result: ', results)
            if (results.status == 201) {
                dispatch({ type: 'SIGNUP_USER_SUCCESS' })
            } else {
                dispatch({ type: 'SIGNUP_USER_REJECTED', payload: 'sign up failed please contact admin.' })
            }
        }).catch(err => {
            //กรณี error
            dispatch({ type: 'SIGNUP_USER_REJECTED', payload: err })
            console.log('server error: ', err)
        })
    }
}

// export const signIn = (values) => {
//     return (dispatch) => {
//         return axios({
//             method: 'post',
//             url: `${BASE_URL}/authenticate/login`,
//             data: values,
//         }).then(results => {
//             if (results.status == 200) {
//                 // console.log('sign in result', results)
//                 // dispatch({ type: 'SIGNIN_USER_SUCCESS' })

//                 // console.log(results.data.token)
//                 AsyncStorage.setItem('user-token', results.data.token);

//             } else {
//                 dispatch({ type: 'SIGNIN_USER_REJECTED', payload: 'the username or password incorrect.' })
//             }
//         }).catch(err => {
//             //กรณี error
//             dispatch({ type: 'SIGNIN_USER_REJECTED', payload: err })
//             console.log('server error: ', err)
//         })
//     }
// }

export const resetStatus = () => {
    return (dispatch) => {
        dispatch({ type: 'SIGNUP_USER_SUCCESS' })
    }
}