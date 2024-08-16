import { createSlice,PayloadAction } from "@reduxjs/toolkit"


interface addtions {
    joinMeeting : boolean;
    meetingNotificaiton  :boolean
}

const initialState : addtions =  {
    joinMeeting : false,
    meetingNotificaiton : true
}

const additonals  = createSlice({
    name : "additional",
    initialState,
    reducers : {
        setJoinMeetingTrue : (state) => { 
            state.joinMeeting = true;
        },
        setJoinMeetingFalse(state) { 
            state.joinMeeting = false;
        },
        setMeetingNotificationTrue(state) {
            state.meetingNotificaiton = true
        },
        setMeetingNotificationFalse(state) {
            state.meetingNotificaiton = false
        }
    }
})

export const {setJoinMeetingFalse,setJoinMeetingTrue} = additonals.actions;
export default additonals.reducer;