import { createSlice } from "@reduxjs/toolkit";

export default chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[],
        loading:false
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.push(action.payload)
        },
        setLoading:(state,action)=>{
            state.loading = action.payload
        },
        setAllMessages:(state,action)=>{
            state.messages = action.payload
        },
        clearMessages:(state)=>{  
            state.messages = []
        }
    }
})