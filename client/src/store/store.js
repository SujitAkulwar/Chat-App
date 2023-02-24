import {createSlice,configureStore} from "@reduxjs/toolkit"

const userslice = createSlice({
    name: "user",
    initialState: { username: "SUJIT"},
    reducers: {
        setuser: (state, action) => {
            state.username = action.payload;
        },
        removeuser: (state) => {
            state.username = null;
        }
    }
});

export const useraction = userslice.actions;

const store = configureStore({
    reducer:{user : userslice.reducer}
})

export default store;