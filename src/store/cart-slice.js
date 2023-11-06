import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceData: (state, action) => {
            state.totalQuantity = action.payload.totalQuantity;
            if (action.payload.itemList) {
                state.itemList = action.payload.itemList;
            } else {
                state.itemList = [];
            }
        },
        addToCart: (state, action) => {
            state.changed = true;
            const newItem = action.payload;
            const existItem = state.itemList.find(
                (item) => item.id === newItem.id,
            );
            if (existItem) {
                existItem.quantity = existItem.quantity;
                existItem.totalPrice = existItem.price;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    source: newItem.source,
                    quantity: newItem.quantity,
                    numReviews: newItem.numReviews,
                    totalPrice: newItem.totalPrice,
                });
                state.totalQuantity++;
            }
        },
        removeFromCart: (state, action) => {
            state.changed = true;
            const itemId = action.payload;
            const itemIndex = state.itemList.findIndex(
                (item) => item.id === itemId,
            ); // return index
            if (itemIndex || itemIndex === 0) {
                const itemToRemove = state.itemList[itemIndex];
                if (itemToRemove.quantity > 1) {
                    itemToRemove.quantity--;
                    itemToRemove.totalPrice -= itemToRemove.price;
                } else if (itemToRemove.quantity === 1) {
                    state.itemList = state.itemList.filter(
                        (item) => item.id !== itemId,
                    );
                    state.totalQuantity--;
                }
            }
        },
    },
});

export const cartActions = cartSlice.actions;
// console.log('cartActions', cartSlice);
export default cartSlice;
