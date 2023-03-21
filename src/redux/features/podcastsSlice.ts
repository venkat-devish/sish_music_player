// getArtistAlbums
import { createSlice } from "@reduxjs/toolkit";
import { getArtistAlbumResults, getGlobalCharts, getPodcastsResults } from "../../data/api/getChartsData";
import { getArtistAlbums } from "../../utilities/api-options";
import { ObjectType } from "./recommendedSlice";

export interface PodcastsState {
    isLoading: boolean;
    podcasts: any[];
}

const initialState = {
    isLoading: false,
    podcasts: [],
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
        })
    }
})

export const isPodcastsLoading = (state: any): boolean => state.podcasts.isLoading;
export const podcasts = (state: any): any[] => state.podcasts.podcasts;

export default podcastsSlice.reducer
