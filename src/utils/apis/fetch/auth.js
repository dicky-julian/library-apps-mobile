import api from '../api';
import { service } from '../service';

const fetchLogin = async (uname, pass) => {
    const options = {
        'method': 'post',
        'url': service.FETCH_LOGIN,
        'data': {
            'username': uname,
            'password': pass
        }
    };

    const res = await api(options)
        .then(res => {
            return res.data.data;
        })
        .catch((err) => {
            return false
        });
    return res;
}

const fetchRegister = async (fullname, uname, pass) => {
    const options = {
        'method': 'post',
        'url': service.FETCH_REGISTER,
        'data': {
            'fullname': fullname,
            'username': uname,
            'password': pass,
            'role': 'member'
        }
    };

    const res = await api(options)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err.response;
        })
    return res;
}

export {
    fetchLogin,
    fetchRegister
}