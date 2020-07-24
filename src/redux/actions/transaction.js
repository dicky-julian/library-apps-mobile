import { getTransaction, borrow } from '../../utils/apis/fetch';

const setTransaction = (data) => {
    return {
        type: 'SET_TRANSACTION',
        payload: data
    }
}

const setBorrow = (data) => {
    return {
        type: 'SET_BORROW',
        payload: data
    }
}

const fetchTransaction = (id) => dispatch => {
    return getTransaction(id, 1).then(borrowed => {
        getTransaction(id, 2).then(returned => {
            dispatch(setTransaction({ borrow: borrowed.data || false, return: returned.data || false }));
        })
    })
}

const fetchBorrow = (id_user, id_book) => dispatch => {
    return borrow(id_user, id_book).then(data => {
        dispatch(setBorrow(data.data));
    })
}

export {
    fetchTransaction,
    fetchBorrow
}