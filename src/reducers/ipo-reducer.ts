import { createSlice } from "@reduxjs/toolkit";
import { initialData, dummyData } from "../data/ipoData";
import { searchIpoAsync } from "./ipo-thunkreducers";

const initialState = {
  ipoDetails: initialData.ipoDetails,
  ipoLotsDetails: initialData.ipoLotsDetails,
  companyFinances: initialData.companyFinances,
  subscriptions: initialData.subscriptions,
  reservations: initialData.reservations,
  ipolotsize: initialData.ipolotsize,
  additionalDetails: initialData.additionalDetails,
  status: "none",
  message: "",
  error: false,
};

const ipoReducer = createSlice({
  name: "ipos",
  initialState,
  reducers: {
    searchIpo(state, action) {
      // need to write thunk when I get APIs
      return {
        ...state,
        ipoDetails:
          action.payload.ipoName === "Dummy IPO"
            ? dummyData.ipoDetails
            : initialData.ipoDetails,
        ipoLotsDetails:
          action.payload.ipoName === "Dummy IPO"
            ? dummyData.ipoLotsDetails
            : initialData.ipoLotsDetails,
        companyFinances:
          action.payload.ipoName === "Dummy IPO"
            ? dummyData.companyFinances
            : initialData.companyFinances,
        subscriptions:
          action.payload.ipoName === "Dummy IPO"
            ? dummyData.subscriptions
            : initialData.subscriptions,
        reservations:
          action.payload.ipoName === "Dummy IPO"
            ? dummyData.reservations
            : initialData.reservations,
        ipolotsize:
          action.payload.ipoName === "Dummy IPO"
            ? dummyData.ipolotsize
            : initialData.ipolotsize,
        additionalDetails:
          action.payload.ipoName === "Dummy IPO"
            ? dummyData.additionalDetails
            : initialData.additionalDetails,
        status: "",
        message: action.payload.ipoName === "Dummy IPO" ? "" : "IPO Not Found",
        error: action.payload.ipoName === "Dummy IPO" ? false : true,
      };
    },
    resetIpoData(state, action) {
      return {
        ...state,
        ipoDetails: initialData.ipoDetails,
        ipoLotsDetails: initialData.ipoLotsDetails,
        companyFinances: initialData.companyFinances,
        subscriptions: initialData.subscriptions,
        reservations: initialData.reservations,
        ipolotsize: initialData.ipolotsize,
        additionalDetails: initialData.additionalDetails,
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

export const { searchIpo, resetIpoData } = ipoReducer.actions;
