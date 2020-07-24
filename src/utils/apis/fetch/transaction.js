import api from '../api';
import { config, service } from '../service';

const getTransaction = async (id_user, status) => {
    const options = {
        'method': 'get',
        'url': `${service.GET_TRANSACTION}/getbyuser`,
        'headers': {
            "Authorization": config.AUTHORIZATION
        },
        'params': {
            'id_user': id_user || '',
            'status': status || ''
        }
    }

    const res = await api(options)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err.response)
            return false;
        })
    return res;
}

const borrow = async (id_user, id_book) => {
    const options = {
        'method': 'post',
        'url': `${service.GET_TRANSACTION}/borrow`,
        'headers': {
            "Authorization": config.AUTHORIZATION
        },
        'data': {
            'id_user': id_user,
            'id_book': id_book
        }
    };

    const res = await api(options)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err.response);
            return false;
        })
    return res;
}

const returnBook = async (id_book) => {
    const options = {
        'method': 'put',
        'url': `${service.GET_TRANSACTION}/borrow`,
        'headers': {
            "Authorization": config.AUTHORIZATION
        },
        'data': {
            'id_book': id_book
        }
    };

    const res = await api(options)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err.response);
            return false;
        })
    return res;
}

export {
    getTransaction,
    borrow,
    returnBook
}