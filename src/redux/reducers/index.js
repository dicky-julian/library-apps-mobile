import { combineReducers } from 'redux';
import auths from './auths';
import book from './book';
import token from './token';
import transaction from './transaction';

export default combineReducers({ auths, book, token, transaction });