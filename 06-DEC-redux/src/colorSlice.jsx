import {createSlice} from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"pink",
    },
    reducers:{
        changColor:(state)=>{
            state.color="red";
        }
        
    }
})
export const {changColor}=colorSlice.actions;
export default colorSlice.reducer;