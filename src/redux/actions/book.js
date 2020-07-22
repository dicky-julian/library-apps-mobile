import { getBook, getAuthor, getGenre } from '../../utils/apis/fetch';

const setBook = (book, author, genre) => {
    return {
        type: 'SET_BOOK',
        payload: {
            book: book,
            author: author,
            genre: genre
        }
    }
}

const setBookFilter = (book) => {
    return {
        type: 'SET_BOOK_FILTER',
        payload: book
    }
}

const setOut = () => {
    return {
        type: 'SET_OUT'
    }
}

const fetchBook = (page) => dispatch => {
    return getBook(page).then(book => {
        if (!book) dispatch(setOut());
        else getAuthor().then(author => {
            getGenre().then(genre => {
                dispatch(setBook(book.data, author.data, genre.data));
            })
        });
    })
}

const fetchBookFilter = (query) => dispatch => {
    return getBook(...query).then(book => {
        dispatch(setBookFilter(book.data))
    })
}

export {
    fetchBook,
    fetchBookFilter,
    setOut
}