import { combineReducers, createSlice } from "@reduxjs/toolkit"
import { getAlbumResults, getRecommendedSongs } from "../../data/api/getChartsData"

export interface RecommendedState {
    isLoading: boolean;
    topCharts: any[];
}

export type ObjectType = {
    [index: string]: any
}

export interface RecommendedAlbumState {
    isLoading: boolean;
    recommendedAlbums: any[];
}

const initialState = {
    isLoading: false,
    topCharts: [],

} as RecommendedState

const initialAlbumsState = {
    isLoading: false,
    recommendedAlbums: []
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
                    console.log(item)
                    const { artist: { name: title }, name: subtitle, cover_art_thumbnail_url: thumbnail } = item;
                    const images = { coverarthq: thumbnail }
                    return { title, images, subtitle }
                })
                console.log(albumData)
                state.isLoading = false;
                state.recommendedAlbums = albumData
            })
    }
})

export const isLoading = (state: any): boolean => state.recommended.recommendedSongsReducer.isLoading;
export const chartsData = (state: any): ObjectType => state.recommended.recommendedSongsReducer.topCharts;
export const albumsData = (state: any): ObjectType => state.recommended.recommendedAlbumsReducer.recommendedAlbums;
export const isAlbumsLoading = (state: any): boolean => state.recommended.recommendedAlbumsReducer.isLoading;


export default combineReducers({
    recommendedSongsReducer: recommendedSlice.reducer,
    recommendedAlbumsReducer: recommendedAlbumslice.reducer
});


