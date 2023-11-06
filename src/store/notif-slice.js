import { createSlice } from '@reduxjs/toolkit';

const notifSlice = createSlice({
    name: 'notif',
    initialState: {
        notification: null,
    },
    reducers: {
        ShowNotification: (state, action) => {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
            };
        },
    },
});

export const notifActions = notifSlice.actions;
export default notifSlice;
