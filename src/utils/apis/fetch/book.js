import api from '../api';
import { config, service } from '../service';

const getBook = async (page, title, order, orderType, limit) => {
    const options = {
        'method': 'get',
        'url': service.GET_BOOK,
        'headers': {
            "Authorization": config.AUTHORIZATION
        },
        'params': {
            'page': page || '',
            'title': title || '',
            'order': order || '',
            'orderType': orderType || '',
            'limit': limit,
        }
    }

    return await api(options)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err);
            return false
        })
}

export {
    getBook
}