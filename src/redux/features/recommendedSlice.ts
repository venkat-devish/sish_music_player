import { createSlice } from "@reduxjs/toolkit"
import { getRecommendedSongs } from "../../data/api/recommendedData"
import { ReducerType } from "../store";

export interface RecommendedState {
    isLoading: boolean;
    topCharts: any[];

}

const initialState = {
    isLoading: false,
    topCharts: [],

} as RecommendedState

const recommendedSlice = createSlice({
    name: 'recommended',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRecommendedSongs.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getRecommendedSongs.fulfilled, (state, action) => {
            const { tracks } = action.payload
            console.log(action.payload)
            state.isLoading = false;
            state.topCharts = tracks
        })
    }
})

export const isLoading = (state: any): boolean => state.recommended.isLoading;
export const chartsData = (state: any): any[] => state.recommended.topCharts;
console.log(chartsData)

export default recommendedSlice.reducer


