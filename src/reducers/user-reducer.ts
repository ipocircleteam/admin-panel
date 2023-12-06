import { createSlice } from "@reduxjs/toolkit";
import getView from "../utils/getView";

const initialState = {
    email: "",
    role: "",
    view: "DATA ENTRY"
}

const userReducer = createSlice({
    name: "users",
    initialState,
    reducers: {
        signin(state, action) {
            const newView = getView(action.payload.role)
            
            return {
                email: action.payload.email,
                role: action.payload.role,
                view: newView
            }
        },
        signout(state, action) {
            return {
                email: "",
                role: "",
                view:"auth"
            }
        }
    }
})

export default userReducer.reducer

export const {
    signin,
    signout
} = userReducer.actions