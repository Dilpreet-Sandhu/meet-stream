import { createSlice,PayloadAction } from "@reduxjs/toolkit"


interface addtions {
    joinMeeting : boolean
}

const initialState : addtions =  {
    joinMeeting : false
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
    }
})

export const {setJoinMeetingFalse,setJoinMeetingTrue} = additonals.actions;
export default additonals.reducer;