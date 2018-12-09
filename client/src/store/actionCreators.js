
import axios from 'axios'
import setAuthenticationToken from '../utils'

const LOGIN_URL = 'http://localhost:5000/api/login'

export const currentUser = (user) => {
    return {
        type : "CURRENT_USER",
        user

    }
}

export const clearUser = () => {
    return {
        type : "CLEAR_USER"
    }
}


export const authenticateLogin = () => {
    localStorage.removeItem('jsonwebtoken')


    return dispatch => {
        
        axios.post(LOGIN_URL, {
            username : localStorage.getItem('username'),
            password : localStorage.getItem('password')
        }).then(response => {
            if (response.data.token !== undefined) {
        
                localStorage.removeItem('password')
                localStorage.setItem('jsonwebtoken', response.data.token)
            

                setAuthenticationToken(response.data.token)

                let user = {username : localStorage.getItem('username')}
                
                dispatch(currentUser(user))
            } else {
                delete axios.defaults.headers.common['Authorization']
                localStorage.removeItem('username')
                localStorage.removeItem('password')
            }
        })
    }
}