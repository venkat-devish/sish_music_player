// getArtistAlbums
import { createSlice } from "@reduxjs/toolkit";
import { getArtistAlbumResults, getGlobalCharts } from "../../data/api/getChartsData";
import { getArtistAlbums } from "../../utilities/api-options";
import { ObjectType } from "./recommendedSlice";

export interface TopArtistsState {
    isLoading: boolean;
    albums: any[];
}

const initialState = {
    isLoading: false,
    albums: [],
} as TopArtistsState

const topArtistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArtistAlbumResults.pending, (state) => {
            state.isLoading = true
        }).addCase(getArtistAlbumResults.fulfilled, (state, action) => {
            const data = action.payload.albums.map((item: ObjectType) => {
                const { id, name: title, cover_art_url, artist: { name: subtitle } } = item
                const images = { 'coverarthq': cover_art_url }
                return { id, title, images, subtitle }
            })
            state.isLoading = false;
            state.albums = data;
        })
    }
})

export const isArtistAlbumsLoading = (state: any): boolean => state.artists.isLoading;
export const artistAlbums = (state: any): any[] => state.artists.albums;

export default topArtistsSlice.reducer
