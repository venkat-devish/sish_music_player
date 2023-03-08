import { AsyncThunkAction, createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { recommendedOptions } from "../../utilities/api-options";



export const getRecommendedSongs = createAsyncThunk('recommended/getRecommendedSongs', async () => {
    const response = await axios.request(recommendedOptions)
    return response.data
})