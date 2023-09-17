import { createSlice } from '@reduxjs/toolkit'

const initialState = {};
const STATE_SIZE = 500;

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addConventionMessage: (state, { conventionId, ...message }) => {
            if (!initialState.hasOwnProperty(conventionId)) {
                initialState[conventionId] = [];
            }
            initialState[conventionId] = [state[conventionId], ...message];
            if (initialState.length > STATE_SIZE) {
                initialState = initialState.slice(0, STATE_SIZE);
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addConventionMessage } = chatSlice.actions;

export default chatSlice.reducer;
