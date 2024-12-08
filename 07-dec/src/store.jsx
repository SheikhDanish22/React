import {configureStore} from "@reduxjs/toolkit";
import nameReducer from "./nameSlice";

const store= configureStore({
    reducer:{
        myname:nameReducer,
    }
})
export default store;