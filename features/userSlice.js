const io = require('socket.io-client/dist/socket.io');
import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setToken: (state, action) => {
            let { accessToken, userId } = action.payload;
            const socket = io(
                process.env.EXPO_PUBLIC_API_URL,
                {
                    transports: ['websocket'], // you need to explicitly tell it to use websockets
                    auth: {
                        token: accessToken,
                    }
                },
            );
            return { accessToken, userId, socket };
        },
    },
})

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
