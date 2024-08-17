import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface notification {
    
        _id : string,
        name : string,
        display : boolean
    
}

interface meetingNotification {
    notifications : Array<notification>;
}

const initialState : meetingNotification = {
    notifications : []
}


const meetingToastNotification = createSlice({
    name : "meetingNotifications",
    initialState,
    reducers : {
        addNotifcation (state,action){
            state.notifications.push(action.payload)
        },
        setDisplayOfNotification(state,action) {
            state.notifications[action.payload].display = false;
        }
    }
})

export const {addNotifcation,setDisplayOfNotification} = meetingToastNotification.actions;

export default meetingToastNotification.reducer;