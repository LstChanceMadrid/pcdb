
const initialState = {
    user : {
        username : null,
        password : null
    }
}

const reducer = (state = initialState, action) => {

    if (action.type === "CURRENT_USER") {
        console.log('inside reducer')
        console.log(action.user)
        window.location.pathname = `/${action.user.username}/home`
        return {
            user : {
                ...state.user,
                username : action.user.username,
                password : action.user.password
            }
        }
    }

    if (action.type === "CLEAR_USER") {
        return {
            user : {}
        }
    }
    


    return state
}

export default reducer