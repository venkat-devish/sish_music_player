import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAlbumsOptions, getArtistAlbums, getPodcastsOptions, getSearchOptions, globalChartsOptions, recommendedOptions } from "../../utilities/api-options";

export const getRecommendedSongs = createAsyncThunk('recommended/getRecommendedSongs', async () => {
    const response = await axios.request(recommendedOptions)
    return response.data
})

export const getGlobalCharts = createAsyncThunk('global/getGlobalCharts', async () => {
    const response = await axios.request(globalChartsOptions)
    return response.data
})

export const getSearchResults = createAsyncThunk('search/getSearchResults', async (query: string) => {
    const options = getSearchOptions(query)
    const response = await axios.request(options);
    return response.data
})

export const getAlbumResults = createAsyncThunk('search/getAlbumResults', async (id: number = 555561) => {
    const options = getAlbumsOptions(id)
    const response = await axios.request(options);
    return response.data
})

export const getArtistAlbumResults = createAsyncThunk('search/getArtistAlbumResults', async (id: number = 555561) => {
    const options = getArtistAlbums(id)
    const response = await axios.request(options);
    return response.data
})

export const getPodcastsResults = createAsyncThunk('podcasts/getPodcastsResults', async () => {
    const options = getPodcastsOptions;
    const response = await axios.request(options)
    return response.data
})
