import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import authSlice from "./authSlice";
import { RealtorApi } from "./api/RealtorApi";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        [RealtorApi.reducerPath]: RealtorApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
        RealtorApi.middleware
    ])
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


