import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: {},
    },
    reducers: {
        loginUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice;
