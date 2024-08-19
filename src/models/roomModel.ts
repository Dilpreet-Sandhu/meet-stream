import {Schema,Types,model,models} from 'mongoose';


interface roomMeeting {
    title : string,
    description : string,
    date : Date,
    time : Date,
    hostId : Types.ObjectId,
    members : Array<Types.ObjectId>,
    meetingCode : string,
    status : "ongoing" | "ended" | "hasn't started",
    options : {
        screenShare : boolean,
        scheduleForLater : boolean,
        allowEveryOneToJoin : boolean,
        allowEveryOneToMessage : boolean
    }
}

const roomSchema = new Schema<roomMeeting>({
    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    date : {
        type : Date
    },
    time : {
        type : Date
    },
    hostId : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    members : [
        {
            _id : {
                type : Schema.Types.ObjectId,
                ref : "User"
            }
        }
    ],
    meetingCode : {
        type :String,
        required : true
    },
    status : {
        type : String,
    },
    options : {
        screenShare : Boolean,
        scheduleForLater : Boolean,
        allowEveryOneToJoin : Boolean,
        allowEveryOneToMessage : Boolean
    }

})


export const Room = models?.Room || model<roomMeeting>("Room",roomSchema);