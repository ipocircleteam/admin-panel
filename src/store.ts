import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/user-reducer'
import ipoReducer from "./reducers/ipo-reducer";

export default configureStore({
    reducer: {
        user: userReducer,
        ipo: ipoReducer
    }
})