import {createSlice} from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"mycounter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count=state.count+10;
        },
        decrement:(state)=>{
            state.count=state.count-10;
        }
    }
})
export const {increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;