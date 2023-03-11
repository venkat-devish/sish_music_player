import { createSlice } from "@reduxjs/toolkit";
import { getSearchResults } from "../../data/api/getChartsData";
import { ObjectType } from "./recommendedSlice";

type SearchState = {
    isLoading: boolean,
    results: ObjectType[],
    topResults: ObjectType[],
    topMostResult: ObjectType[]
}

const initialState: SearchState = {
    isLoading: false,
    results: [],
    topResults: [],
    topMostResult: []
} as SearchState

const searchDataSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSearchResults.pending, (state) => {
            state.isLoading = true
        }).addCase(getSearchResults.fulfilled, (state, action) => {
            const data = action.payload.hits.map((item: ObjectType) => {
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


export const searchResults = (state: any): ObjectType => state.search.results
export const isSearching = (state: any): boolean => state.search.isLoading;
export const topResultsData = (state: any): ObjectType => state.search.topResults;
export const topMostResultData = (state: any): ObjectType => state.search.topMostResult;


export default searchDataSlice.reducer