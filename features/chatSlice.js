import { createSlice } from '@reduxjs/toolkit'

const initialState = { conversations: {} };
const STATE_SIZE = 500;

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        addConventionMessage: (state, action) => {
            let { conversationId, ...message } = action.payload;
            console.log("addConventionMessage", { conversationId, ...message })
            return {
                conversations:
                {
                    ...state.conversations,
                    [conversationId]: state.conversations.hasOwnProperty(conversationId) ?
                        [...state.conversations[conversationId], message].slice(0, STATE_SIZE) :
                        [message],
                }
            };
        },
    },
})

// Action creators are generated for each case reducer function
export const { addConventionMessage } = chatSlice.actions;

export default chatSlice.reducer;
