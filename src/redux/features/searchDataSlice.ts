import { createSlice } from "@reduxjs/toolkit";
import { getSearchResults } from "../../data/api/getChartsData";

type SearchState = {
    isLoading: boolean,
    results: any[]
}

const initialState: SearchState = {
    isLoading: false,
    results: []
}

const searchDataSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSearchResults.pending, (state) => {
            state.isLoading = true
        }).addCase(getSearchResults.fulfilled, (state, action) => {
            state.isLoading = false;
            state.results.push(action.payload.result)
        })
    }
})

export const isDataFetching = (state: any) => state.search.isLoading
export const searchResults = (state: any) => state.search.results

export default searchDataSlice.reducer