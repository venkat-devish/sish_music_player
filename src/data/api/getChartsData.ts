import { AsyncThunkAction, createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { getSearchOptions, globalChartsOptions, recommendedOptions } from "../../utilities/api-options";

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
