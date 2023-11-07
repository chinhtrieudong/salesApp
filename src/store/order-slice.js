import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: { orderList: {} },
    reducers: {
        addOrder: (state, actions) => {
            console.log(actions.payload);
            const newOrder = actions.payload;
            state.orderList.push({
                orderDate: newOrder.orderDate,
                infoDelivery: newOrder.infoDelivery,
                pay: newOrder.pay,
                infoOrder: newOrder.infoOrder,
            });
        },
    },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
