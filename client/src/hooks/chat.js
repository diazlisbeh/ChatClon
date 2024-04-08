import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { addMessage, setAllMessages, setLoading } from '../store/chatSlice'


export default function useChat(){
    
    const loading = useSelector((state) => state.chat.loading)
    const messages = useSelector((state) => state.chat.messages)
    const dispatch = useDispatch()
    const getResponse = async (text) => {

        let res = await fetch("http://localhost:1234/v1/chat/completions",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                "messages": [ 
                { "role": "system", "content": "You are a code copylot" },
                { "role": "user", "content": `${text}` }
                ], 
                "temperature": 0.7, 
                "max_tokens": -1,
                "stream": false
            })
        })

        if(!res.ok){
            alert( `An error has ocurred ${res.status}`)
        }
        else{
            let data = await res.json()
            dispatch(addMessage({text:data.choices[0].message.content,isUser:false}))
        }
    } 


    return{getResponse,loading}
}