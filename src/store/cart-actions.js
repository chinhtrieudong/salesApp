import { useSelector } from 'react-redux';
import { axiosInstance } from '../api/request';
import { cartActions } from './cart-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

// get
export const fetchCartData = () => {
    return async (dispatch) => {
        const token = AsyncStorage.getItem('token');

        const fetchHandler = async () => {
            const config = {
                headers: {
                    headers: { Authorization: 'Bearer ' + token },
                },
            };
            const response = await axiosInstance.get(
                '/api/v1/cart-items?populate=productId',
                config,
            );

            return response;
        };

        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData));
        } catch (error) {
            console.log(error);
        }
    };
};

// Send data to cart
export const sendCartData = (cart) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axiosInstance.put(`/api/v1/cart-items`, cart, {
                headers: {
                    headers: { Authorization: 'Bearer ' + token },
                },
            });
            const data = res.json();
            return data;
        };
        try {
            await sendRequest();
        } catch (error) {
            console.log(error);
        }
    };
};
