const initialState = {
    borrow: '',
    return: ''
}

const token = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRANSACTION':
            return {
                borrow: action.payload.borrow,
                return: action.payload.return
            }
            case 'SET_BORROW':
            return {
                ...state,
                borrow: [
                    ...state.borrow,
                    action.payload
                ]
            }
        default:
            return state
    }
} 

export default token;