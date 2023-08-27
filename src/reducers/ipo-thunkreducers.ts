import { createAsyncThunk } from '@reduxjs/toolkit'

export const searchIpoAsync = createAsyncThunk('ipo/searchIpo',
    async (payload, { rejectWithValue }) => {
    const uri = process.env.REACT_APP_SERVER_URL + "/api/searchIpo"
    const data = {
        // data sent from frontend
    }
    try {
    // const response = await axios.post(uri, data);
        return {}
    }
    catch (error: any) {
        // console.log(error);
        // return rejectWithValue(error.response.data);
    }
}
)

