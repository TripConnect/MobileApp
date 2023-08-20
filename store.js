import { configureStore, combineReducers } from '@reduxjs/toolkit'
import chatReducer from './features/chatSlide'

const rootReducer = combineReducers({ chat: chatReducer });

export const store = configureStore({
    reducer: rootReducer,
})
