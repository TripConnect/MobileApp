import { configureStore, combineReducers } from '@reduxjs/toolkit';
import chatReducer from './features/chatSlice';
import accountReducer from './features/userSlice';


const rootReducer = combineReducers({
    chat: chatReducer,
    account: accountReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
})
