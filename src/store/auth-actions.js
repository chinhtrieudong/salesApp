import { AsyncStorage } from 'react-native';
const { axiosInstance } = require('../api/request');
import { authActions } from './auth-slice';

// signup
export const userPostFetch = (user) => {
    return async (dispatch) => {
        return axiosInstance
            .post('/api/v1/users', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ user }),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                    console.log(data.message);
                } else {
                    AsyncStorage.setItem('token', data.jwt);
                    dispatch(authActions.loginUser(data.user));
                }
            });
    };
};

// login
export const userLoginFetch = (user) => {
    return async (dispatch) => {
        return axiosInstance
            .post('/api/v1/login', {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({ user }),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.message) {
                } else {
                    AsyncStorage.setItem('token', data.jwt);
                    dispatch(authActions.loginUser(data.user));
                }
            });
    };
};

// user information
export const getProfileFetch = () => {
    return async (dispatch) => {
        const token = AsyncStorage.getItem('token');
        if (token) {
            return axiosInstance
                .get(`/api/v1/${idUser}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.message) {
                        AsyncStorage.removeItem('token');
                    } else {
                        dispatch(authActions.loginUser(data.user));
                    }
                });
        }
    };
};
