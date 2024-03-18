import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sendIcon from './assets/send.svg'
import InitPage from './components/initPage'
import ChatBurbble from './components/chat-bubble'
import useChat from './hooks/chat'

function App() {
  

  const [messages,setMessages] = useState([])
  const [text,setText] = useState('')
  const {getResponse} = useChat()
  const sendText = async () => {
      console.log(text)
      setMessages((messages) => [...messages,{ text: text, isUser: true }])
      let r = await getResponse(text)
      console.log(r.choices[0].message.content)
      setMessages((messages) => [...messages, { text: r.choices[0].message.content, isUser: false }]);

      // setMessages([...messages,{text:r.choices[0].message.content,isUser:false}])
  }

  return (
    <>
      <div className='flex flex-col h-screen bg-slate-100'>
        <nav className=' m-5'>
          <p className=' text-lg'>Chat</p>
        </nav>
        <div className='flex flex-col justify-between h-full'>
          
            {messages.length == 0 ? <InitPage/> : <div className={`overflow-auto max-h-[calc(100vh-10rem)] mx-5`}> {messages.map((m) => <ChatBurbble text={m.text} isUser={m.isUser}/>)}</div>}
          
          <div className='flex '>
            <input className=' m-3 w-full min-h-9 p-4 break-words border border-gray-300 rounded-lg bg-gray-50 focus:bg-gray-200 focus:ring-blue-500 focus:border-blue-500' 
              type='text'
              // onChange={(e) => setText(e.target.vale)}
              onChange={(e) => setText(e.target.value)}
              ></input>
                <img className='w-8 mr-3' 
                  src={sendIcon}
                  onClick={sendText}
                  >
                  </img>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
