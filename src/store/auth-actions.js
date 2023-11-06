import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosInstance } from '../api/request';
import { authActions } from './auth-slice';

// signup
export const userPostFetch = (user) => {
    return async (dispatch) => {
        const response = await axiosInstance.post('/api/v1/auth/login', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ user }),
        });

        try {
            data = await response.json();
            if (data.message) {
                console.log(data.message);
            } else {
                AsyncStorage.setItem('token', data.jwt);
                dispatch(authActions.loginUser(data.user));
            }
        } catch (error) {
            console.log(error);
        }
        // return axiosInstance
        //     .post('/api/v1/users', {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Accept: 'application/json',
        //         },
        //         body: JSON.stringify({ user }),
        //     })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.message) {
        //             console.log(data.message);
        //         } else {
        //             AsyncStorage.setItem('token', data.jwt);
        //             dispatch(authActions.loginUser(data.user));
        //         }
        //     });
    };
};

// login
export const userLoginFetch = (user) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.post('/api/v1/auth/login', user);
            const token = res.data.data.access_token;
            const userData = res.data.data.payload;

            if (token) {
                AsyncStorage.setItem('token', token);
                dispatch(authActions.loginUser(userData));
            } else {
                dispatch(authActions.removeUser());
            }
        } catch (error) {
            console.log('Lỗi ', error);
            dispatch(authActions.removeUser());
        }
    };
};

// user information
export const getProfileFetch = () => {
    return async (dispatch) => {
        const token = await AsyncStorage.getItem('token');
        console.log('getProfileFetch: ', token);
        try {
            if (token) {
                let config = {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                };
                const response = await axiosInstance.post(
                    '/api/v1/auth/reload',
                    config,
                );
                console.log(response);
                if (response) {
                    //     AsyncStorage.removeItem('token');
                    // } else {
                    dispatch(authActions.loginUser(data.user));
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
};
