import { createSlice } from "@reduxjs/toolkit";
import { getSearchResults } from "../../data/api/getChartsData";

type KeyType = {
    [index: string]: any
}

type SearchState = {
    isLoading: boolean,
    results: KeyType[],
    topResults: KeyType[],
    topMostResult: KeyType[]
}

const initialState: SearchState = {
    isLoading: false,
    results: [],
    topResults: [],
    topMostResult: []
}

const searchDataSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSearchResults.pending, (state) => {
            state.isLoading = true
        }).addCase(getSearchResults.fulfilled, (state, action) => {
            const data = action.payload.hits.map((item: any) => {
                const { primary_artist: { id }, title, header_image_url, artist_names: subtitle } = item.result;
                const images = { 'coverarthq': header_image_url }
                return { id, title, images, subtitle }
            })
            state.isLoading = false;
            state.results = data;
            state.topResults = data.slice(1, 6)
            state.topMostResult = data.slice(0, 1)[0]
        })
    }
})


export const searchResults = (state: any) => state.search.results
export const isSearching = (state: any) => state.search.isLoading;
export const topResultsData = (state: any) => state.search.topResults;
export const topMostResultData = (state: any) => state.search.topMostResult;


export default searchDataSlice.reducer