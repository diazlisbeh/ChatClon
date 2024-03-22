import { useState } from "react"


export default function useChat(){
    
    const [loading, setLoading] = useState(false)

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
            setLoading(true)
            let data = await res.json()
            setLoading(false)
            return data
        }
    } 


    return{getResponse,loading}
}