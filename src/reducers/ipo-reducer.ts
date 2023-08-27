import { createSlice } from "@reduxjs/toolkit";
import { initialIpoData, ipoData } from "../data/ipoData";
import { searchIpoAsync } from "./ipo-thunkreducers";

const initialState = {
    currentIPO: initialIpoData,
    status: "none",
    message: "",
    error: false
}

const ipoReducer = createSlice({
    name: "ipos",
    initialState,
    reducers: {
        searchIpo(state, action) {
            console.log(action.payload);
            
            return {
                currentIPO: action.payload.ipoName === "Dummy IPO" ? ipoData : initialIpoData,
                status: "",
                message: action.payload.ipoName === "Dummy IPO" ? "" : "IPO Not Found",
                error: action.payload.ipoName === "Dummy IPO" ? false: true
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchIpoAsync.fulfilled, (state, action) => {
            // logic of setting ipo as current IPO
            // state.currentIPO= ipoData
        })
    }
})

export default ipoReducer.reducer

export const {
    searchIpo
} = ipoReducer.actions