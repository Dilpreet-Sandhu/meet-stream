import { createSlice } from "@reduxjs/toolkit"


export interface roomMeeting {
    title : string,
    description : string,
    date : number | string ,
    time : number | string,
    options : {
        screenShare : boolean,
        scheduleForLater : boolean,
        allowEveryoneToJoin : boolean,
        allowEveryoneToMessage : boolean
    },
    members : string[]
}

const initialState : roomMeeting = {
    title : "",
    description : "",
    date : "0",
    time : "0",
    options : {
        screenShare : false,
        scheduleForLater : false,
        allowEveryoneToJoin : false,
        allowEveryoneToMessage : false,
    },
    members : []
}

const roomSlice = createSlice({
    name : "room",
    initialState,
    reducers : {
        addFormDate : (state : roomMeeting,action : {payload : {name : "title" | "description" | "date" | "time",data : any},type : any}) => {
            const dublicate = state;
            const {name} = action.payload;
           dublicate[name] = action.payload.data;
           state = dublicate;

        },
        setOptionToggler : (state : roomMeeting,action : {payload : {name : "screenShare" | "scheduleForLater" | "allowEveryoneToJoin" | "allowEveryoneToMessage",type : boolean}}) => {
            if (action.payload.type) {
            state.options[action.payload.name] = true;
            }
            else {
            state.options[action.payload.name] = false;
            }
        },
        addMembersToRoom(state : roomMeeting,action : {payload : string}) {
            state.members.push(action.payload);
        }
        
    }
})



export const {addFormDate,setOptionToggler,addMembersToRoom} = roomSlice.actions;
export default roomSlice.reducer;