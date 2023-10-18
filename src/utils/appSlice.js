import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name:"app",
    initialState:{
        isDarkMode: false,
    },
    reducers:{
        toggleDarkMode:(state)=>{
            state.isDarkMode=!state.isDarkMode;
        }
    }
})

export const {toggleDarkMode} = appSlice.actions;
export default appSlice.reducer;