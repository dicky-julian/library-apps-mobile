import api from '../api';
import { config, service } from '../service';

const getAuthor = async () => {
    const options = {
        'method': 'get',
        'url': service.GET_AUTHOR,
        'headers': {
            "Authorization": config.AUTHORIZATION
        }
    }

    return await api(options)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err.response.data.message);
            return false
        })
}

export {
    getAuthor
}