import { configureStore } from "@reduxjs/toolkit";
import additonals from "./features/additonals";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer : {
        additional : additonals
    }
})

type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;


// export const useAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;