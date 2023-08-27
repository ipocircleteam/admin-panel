import { createSlice } from "@reduxjs/toolkit";
import { ipoData } from "../data/ipoData";

const initialState = {
    currentIPO: ipoData
}

const ipoReducer = createSlice({
    name: "ipos",
    initialState,
    reducers: {
        
    }
})

export default ipoReducer.reducer

export const {
    
} = ipoReducer.actions