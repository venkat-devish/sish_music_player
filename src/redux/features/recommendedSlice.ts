import { combineReducers, createSlice } from "@reduxjs/toolkit"
import { getAlbumResults, getRecommendedSongs } from "../../data/api/getChartsData"

export interface RecommendedState {
    isLoading: boolean;
    topCharts: any[];
    error: string
}

export type ObjectType = {
    [index: string]: any
}

export interface RecommendedAlbumState {
    isLoading: boolean;
    recommendedAlbums: any[];
    error: string
}

const initialState = {
    isLoading: false,
    topCharts: [],
    error: ''
} as RecommendedState

const initialAlbumsState = {
    isLoading: false,
    recommendedAlbums: [],
    error: ''

} as RecommendedAlbumState

const recommendedSlice = createSlice({
    name: 'recommended',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecommendedSongs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getRecommendedSongs.fulfilled, (state, action) => {
                const { tracks } = action.payload
                state.isLoading = false;
                state.topCharts = tracks.slice(1, 7)
            }).addCase(getRecommendedSongs.rejected, (state, action) => {
                state.error += action.payload
            })
    }
})

const recommendedAlbumslice = createSlice({
    name: 'albums',
    initialState: initialAlbumsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAlbumResults.pending, (state) => {
                state.isLoading = true;
            }).addCase(getAlbumResults.fulfilled, (state, action) => {
                const albumData = action.payload.albums.map((item: ObjectType) => {
                    const { artist: { name: title }, name: subtitle, cover_art_thumbnail_url: thumbnail } = item;
                    const images = { coverarthq: thumbnail }
                    return { title, images, subtitle }
                })
                state.isLoading = false;
                state.recommendedAlbums = albumData
            }).addCase(getAlbumResults.rejected, (state, action) => {
                state.error += action.payload
            })
    }
})

export const isLoading = (state: any): boolean => state.recommended.recommendedSongsReducer.isLoading;
export const chartsData = (state: any): ObjectType => state.recommended.recommendedSongsReducer.topCharts;
export const albumsData = (state: any): ObjectType => state.recommended.recommendedAlbumsReducer.recommendedAlbums;
export const isAlbumsLoading = (state: any): boolean => state.recommended.recommendedAlbumsReducer.isLoading;
export const recommendedError = (state: any) => state.podcasts.error
export const recommendedAlbumsError = (state: any) => state.podcasts.error



export default combineReducers({
    recommendedSongsReducer: recommendedSlice.reducer,
    recommendedAlbumsReducer: recommendedAlbumslice.reducer
});


