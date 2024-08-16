import { createSlice } from "@reduxjs/toolkit"



interface user {
    user : boolean
}

const initialState : user = {
    user : true
}


const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        logOutUser(state,action) {
            state.user = false
        }
    }
})


export const {logOutUser} = userSlice.actions;

export default userSlice.reducer;