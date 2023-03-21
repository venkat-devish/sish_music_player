import { createSlice } from "@reduxjs/toolkit";
import { getGlobalCharts } from "../../data/api/getChartsData";

export interface GlobalChartsState {
    isLoading: boolean;
    globalCharts: any[];
    globalPopCharts: any[];
    topSearchResults: any[];
    error: string;
}

const initialState = {
    isLoading: false,
    globalCharts: [],
    globalPopCharts: [],
    topSearchResults: [],
    error: ''
} as GlobalChartsState

const globalChartsSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGlobalCharts.pending, (state) => {
            state.isLoading = true
        }).addCase(getGlobalCharts.fulfilled, (state, action) => {
            const { tracks } = action.payload
            state.isLoading = false;
            state.globalCharts = tracks.slice(6, 12)
            state.globalPopCharts = tracks.slice(13, 19)
            state.topSearchResults = tracks.slice(0, 6)
        }).addCase(getGlobalCharts.rejected, (state, action) => {
            state.error += action.payload
        })
    }
})

export const isGlobalLoading = (state: any): boolean => state.globalCharts.isLoading;
export const globalCharts = (state: any): GlobalChartsState[] => state.globalCharts.globalCharts;
export const globalPopCharts = (state: any): GlobalChartsState[] => state.globalCharts.globalPopCharts;
export const globalTopSearchPopCharts = (state: any): GlobalChartsState[] => state.globalCharts.topSearchResults;
export const globalChartsError = (state: any) => state.globalCharts.error

export default globalChartsSlice.reducer