import { configureStore } from "@reduxjs/toolkit";
import additonals from "./features/additonals";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import user from "./features/user";

export const store = configureStore({
    reducer : {
        additional : additonals,
        user : user
    }
})

type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;


// export const useAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;