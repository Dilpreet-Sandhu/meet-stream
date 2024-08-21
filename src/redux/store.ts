import { configureStore } from "@reduxjs/toolkit";
import additonals from "./features/additonals";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import meetingNotification from './features/roomNotification'
import user from "./features/user";
import room from "./features/room";
import apiSlice from "./features/api";

export const store = configureStore({
    reducer : {
        additional : additonals,
        user : user,
        meetingNotification : meetingNotification,
        room : room,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware : (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(apiSlice.middleware)
    ),
})

type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;


// export const useAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;