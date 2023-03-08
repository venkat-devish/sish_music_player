import { createSlice } from "@reduxjs/toolkit";
import { getGlobalCharts } from "../../data/api/getChartsData";

export interface GlobalChartsState {
    isLoading: boolean;
    globalCharts: any[];
    globalPopCharts: any[]
}

const initialState = {
    isLoading: false,
    globalCharts: [],
    globalPopCharts: []
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
            state.globalCharts = tracks.slice(0, 7)
            state.globalPopCharts = tracks.slice(8, 16)
        })
    }
})

export const isGlobalLoading = (state: any): boolean => state.globalCharts.isLoading;
export const globalCharts = (state: any): any[] => state.globalCharts.globalCharts;
export const globalPopCharts = (state: any): any[] => state.globalCharts.globalPopCharts;

export default globalChartsSlice.reducer