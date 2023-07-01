import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import articleReducer from "../features/blog/articleSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        articles: articleReducer
    }
})