import {createSlice} from "@reduxjs/toolkit";
const nameSlice=createSlice({
    name:"myname",
    initialState:{
        nm:"Hello freinds",
    },
    reducers:{
        changeName:(state)=>{
            state.nm="We are student";
        }
        
    }
})
export const {changeName}=nameSlice.actions;
export default nameSlice.reducer;