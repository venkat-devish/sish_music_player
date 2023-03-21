import { createSlice } from "@reduxjs/toolkit";
import { getPodcastsResults } from "../../data/api/getChartsData";
import { ObjectType } from "./recommendedSlice";

export interface PodcastsState {
    isLoading: boolean;
    podcasts: any[];
    error: string
}

const initialState = {
    isLoading: false,
    podcasts: [],
    error: ''
} as PodcastsState

const podcastsSlice = createSlice({
    name: 'podcasts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPodcastsResults.pending, (state) => {
            state.isLoading = true
        }).addCase(getPodcastsResults.fulfilled, (state, action) => {
            const data = action.payload.data.list.map((item: ObjectType) => {
                const { cid: id, title, small_cover_url, author: subtitle } = item
                const images = { 'coverarthq': small_cover_url }
                return { id, title, images, subtitle }
            })
            state.isLoading = false;
            state.podcasts = data;
        }).addCase(getPodcastsResults.rejected, (state, action) => {
            state.error += action.payload
        })
    }
})

export const isPodcastsLoading = (state: any): boolean => state.podcasts.isLoading;
export const podcasts = (state: any): PodcastsState[] => state.podcasts.podcasts;
export const podcastsError = (state: any) => state.podcasts.error

export default podcastsSlice.reducer
