import { fetchLogin, fetchRegister } from '../../utils/apis/fetch';
import decode from '../../utils/helpers/decode';

const setLogin = (uname, pass) => dispatch => {
    dispatch(setLoading());
    fetchLogin(uname, pass).then(res => {
        if (!res) {
            dispatch(setError({
                'title': 'Invalid input', 
                'description': 'Username or password is invalid!'
            }));
            dispatch(setLoading(false));
            return;
        }
        dispatch(setToken(res.token));
    })
}

const setUser = (data) => {
    let role = false;
    if (data.role === 'admin') role = true;
    return {
        type: 'SET_LOGIN',
        payload: {
            isLogin: data,
            isAdmin: role
        }
    }
}

const setToken = (token) => dispatch => {
    const tokenData = decode(token);
    const data = {
        id: tokenData.id,
        fullname: tokenData.fullname,
        role: tokenData.role
    }
    dispatch(setUser(data));
    dispatch(useToken(token));
}

const setLoading = (val = true) => {
    return {
        type: 'SET_LOADING',
        payload: val
    }
}

const setError = (err) => {
    return {
        type: 'SET_ERROR',
        payload: err
    }
}

const useToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

const setLogout = () => dispatch => {
    dispatch(revokeUser());
    dispatch(revokeToken());
}

const revokeToken = () => {
    return {
        type: 'REVOKE_TOKEN'
    }
}

const revokeUser = () => {
    return {
        type: 'REVOKE_USER'
    }
}

export {
    setLogin,
    setToken,
    setLoading,
    setError,
    setLogout
}