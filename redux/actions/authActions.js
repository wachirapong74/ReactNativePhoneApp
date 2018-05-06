import axios from 'axios'
import config from '../../configure'

import {
    AsyncStorage
} from 'react-native';

const BASE_URL = config.BASE_URL

export const signIn = (values) => {

    console.log('values in actions', values)

    return (dispatch) => {
        return axios({
            method: 'post',
            url: `${BASE_URL}/authenticate/login`,
            data: values,
        }).then(response => {
            console.log('sign-in result', response)

            if (response.status == 200) {
                console.log(response.data.token)
                AsyncStorage.setItem('user-token', response.data.token);
            }
        
            // dispatch({
            //     type: 'AUTH_USER',
            //     payload: jwtDecode(token)
            // })
        }).catch((error) => {
            // console.log('error: ', error)
            dispatch({ type: 'AUTH_ERROR', payload: "username or password incorrect" })
        })
    }
}

//ส�ำหรับ SignOut ออกจากระบบ
//และต้องเอา key ชื่อ token ที่เก็บไว้ใน localstorage ของ browser ออกด้วย
export const signOut = () => {
    return (dispatch) => {
        // localStorage.removeItem('token')
        // dispatch({ type: 'UNAUTH_USER' })
    }
}