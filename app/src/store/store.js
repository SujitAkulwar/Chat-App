import {createSlice,configureStore} from "@reduxjs/toolkit"

const userslice = createSlice({
    name: "user",
    initialState: { username: null, receivername: null,receiverids: null,chats:null,userid: null,receiverid : null},
    reducers: {
        setuser: (state, action) => {
            state.username = action.payload;
        },
        removeuser: (state) => {
            state.username = null;
        },
        setuserid: (state, action) => {
            state.userid = action.payload;  
        },
        setreceiver: (state, action) => {
            state.receivername = action.payload;
        },
        setreceiverids: (state, action) => {
            state.receiverids = action.payload;
        },
        removereceiverids: (state) => {
            state.receiverids = null;
        },
        setchats: (state, action) => {
            state.chats = action.payload;
        },
        setreceiverid: (state, action) => {
            state.receiverid = action.payload;
        }
    }
});

export const useraction = userslice.actions;

const store = configureStore({
    reducer:{user : userslice.reducer}
})

export default store;