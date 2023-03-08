import { AnyAction, configureStore, Reducer } from "@reduxjs/toolkit";
import recommendedReducer, { RecommendedState } from "./features/recommendedSlice";

export type ReducerType = {
    recommended: Reducer<RecommendedState, AnyAction>
}

const store = configureStore({
    reducer: {
        recommended: recommendedReducer
    }
})

export default store