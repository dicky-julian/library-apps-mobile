import { getBook } from './book';
import { getAuthor } from './author';
import { getGenre } from './genre';
import { fetchLogin, fetchRegister } from './auth';
import { borrow, getTransaction, returnBook } from './transaction';

export {
    getBook,
    getAuthor,
    getGenre,
    fetchLogin,
    fetchRegister,
    borrow, 
    getTransaction, 
    returnBook
}