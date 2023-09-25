import { createSlice } from '@reduxjs/toolkit'

const initialState = { conversations: {} };
const STATE_SIZE = 500;

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addConventionMessage: (state, { conventionId, ...message }) => {
            return {
                conversations:
                {
                    ...state.conversations,
                    [conventionId]: state.conversations.hasOwnProperty(conventionId) ?
                        [...state.conversations[conventionId], message].slice(0, STATE_SIZE) :
                        [message],
                }
            };
        },
    },
})

// Action creators are generated for each case reducer function
export const { addConventionMessage } = chatSlice.actions;

export default chatSlice.reducer;
