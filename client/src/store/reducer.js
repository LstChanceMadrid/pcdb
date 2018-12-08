
const initialState = {
    username : null,
    password : null
}

const reducer = (state = initialState, action) => {

    if (action.type === "USERNAME_CHANGE") {
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
        return {
            ...state,
            username : state.username
        }
    }
    return state
}

export default reducer