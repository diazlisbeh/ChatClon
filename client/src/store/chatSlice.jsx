import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[],
        loading: false
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
        },
        updateMessage:(state,action) =>{
            
        }
    }
})

export const {addMessage,setLoading,setAllMessages,clearMessages} = chatSlice.actions
export default chatSlice.reducer