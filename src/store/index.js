import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';
import notifSlice from './notif-slice';
import orderSlice from './order-slice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        notif: notifSlice.reducer,
        order: orderSlice.reducer,
    },
});

export default store;
