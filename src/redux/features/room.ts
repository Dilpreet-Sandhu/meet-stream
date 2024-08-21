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
    members : any[]
}

const initialState : roomMeeting = {
    title : "",
    description : "",
    date : "2024-05-05",
    time : "08:30",
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
        addMembersToRoom(state : roomMeeting,action : {payload : any}) {
            state.members.push(action.payload);
        },
        removeMemberFromRoom(state : roomMeeting,action : {payload : string}) {
            state.members = state.members.filter((user => user._id !== action.payload));
        }
        
    }
})



export const {addFormDate,setOptionToggler,addMembersToRoom,removeMemberFromRoom} = roomSlice.actions;
export default roomSlice.reducer;