import { AnyAction, configureStore, Reducer } from "@reduxjs/toolkit";
import recommendedReducer, { RecommendedState } from "./features/recommendedSlice";
import albumsReducer from "./features/recommendedSlice"
import globalChartsReducer from "./features/globalChartsSlice"
import searchReducer from "./features/searchDataSlice"

export type ReducerType = {
    recommended: Reducer<RecommendedState, AnyAction>
}

const store = configureStore({
    reducer: {
        recommended: recommendedReducer,
        albums: albumsReducer,
        globalCharts: globalChartsReducer,
        search: searchReducer
    }
})

export default store