
const initialState = {
    username : "",
    password : ""
}

const reducer = (state = initialState, action) => {

    if (action.type === "USERNAME_CHANGE") {
        console.log('username in reducer')
        console.log(state)
        return {
                ...state,
                username : state.username
            
        }
    }

    if (action.type === "PASSWORD_CHANGE") {
        return {
            ...state,
            password : state.password
        }
    }
    

    if (action.type === "USER_LOGIN") {
        console.log('hello')
        console.log(state)
        return {
            ...state,
            username : state.username
        }
    }
    return state
}

export default reducer