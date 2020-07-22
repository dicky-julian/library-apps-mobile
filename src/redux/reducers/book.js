const initialState = {
    book: '',
    author: '',
    genre: '',
    bookPopular: '',
    isOut: false
}

const book = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOK':
            return {
                ...state,
                book: [
                    ...state.book,
                    ...action.payload.book
                ],
                author: action.payload.author,
                genre: action.payload.genre
            }
        case 'SET_BOOK_FILTER':
            return {
                ...state,
                bookPopular: action.payload
            }
        case 'SET_OUT':
            return {
                ...state,
                isOut: true
            }
        default:
            return state
    }
}

export default book;