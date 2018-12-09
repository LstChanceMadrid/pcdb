
const initialState = {
    user : {
        username : null,
        password : null
    }
}

const reducer = (state = initialState, action) => {

    if (action.type === "CURRENT_USER") {
        window.location.pathname = `/${action.user.username}/home`
        return {
            user : {
                ...state.user,
                username : action.user.username,
                password : action.user.password
            }
        }
    }
    
    return state
}

export default reducer