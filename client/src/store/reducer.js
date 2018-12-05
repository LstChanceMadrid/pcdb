
const initialState = () => {
    user : {}
}

const reducer = (state = initialState, action) => {

    if (action.type === "USERNAME") {
        return {
            ...state,
            username : state.username
        }
    }
    return state
}

export default reducer