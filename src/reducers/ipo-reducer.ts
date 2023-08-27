import { createSlice } from "@reduxjs/toolkit";
import {
  initialCompanyFin,
  initialIpoData,
  initialLotsData,
  initialSubscriptions,
  ipoData,
} from "../data/ipoData";
import { searchIpoAsync } from "./ipo-thunkreducers";

const initialState = {
  ipoDetails: initialIpoData,
  ipoLotsDetails: initialLotsData,
  companyFinances: initialCompanyFin,
  subscriptions: initialSubscriptions,
  status: "none",
  message: "",
  error: false,
};

const ipoReducer = createSlice({
  name: "ipos",
  initialState,
  reducers: {
    searchIpo(state, action) {
      return {
        ...state,
        ipoDetails:
          action.payload.ipoName === "Dummy IPO" ? ipoData : initialIpoData,
        status: "",
        message: action.payload.ipoName === "Dummy IPO" ? "" : "IPO Not Found",
        error: action.payload.ipoName === "Dummy IPO" ? false : true,
      };
    },
    setIpoData(state, action) {
      return {
        ...state,
        ipoDetails: action.payload.ipodata,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchIpoAsync.fulfilled, (state, action) => {
      // logic of setting ipo as current IPO
      // state.currentIPO= ipoData
    });
  },
});

export default ipoReducer.reducer;

export const { searchIpo, setIpoData } = ipoReducer.actions;
