const initialState = {
    isLogin: false,
    isAdmin: false,
    isLoading: false,
    isError: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return {
                ...state,
                isLogin: action.payload.isLogin,
                isAdmin: action.payload.isAdmin,
                isLoading: false
            }
        case 'REVOKE_USER':
            return {
                ...state,
                isLogin: false,
                isAdmin: false,
                isLoading: false,
                isError: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}

export default auth;