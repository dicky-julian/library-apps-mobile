const initialState = {
    token: ''
}

const token = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                token: action.payload
            }
        case 'REVOKE_TOKEN':
            return {
                ...state,
                token: ''
            }
        default:
            return state
    }
} 

export default token;