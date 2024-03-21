import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import sendIcon from './assets/send.svg'
import InitPage from './components/initPage'
import ChatBurbble from './components/chat-bubble'
import useChat from './hooks/chat'
import SideBar from './components/sidebar'
import bar from './assets/bar.svg'
import newIcon from './assets/new.svg'
import { useReducer } from 'react'
import ChatHistory from './components/chat-history'

function App() {
  

  const [messages,setMessages] = useState([])
  const [text,setText] = useState('')
  const {getResponse} = useChat()
  const [open,setOpen] = useState(true)
  const [conversations, setConversation] = useState()


  const sendText = async () => {
      console.log(text)
      setMessages((messages) => [...messages,{ text: text, isUser: true }])
      let r = await getResponse(text)
      console.log(r.choices[0].message.content)
      setMessages((messages) => [...messages, { text: r.choices[0].message.content, isUser: false }]);

      // setMessages([...messages,{text:r.choices[0].message.content,isUser:false}])
  }

  const moveBar = () =>{
      if(open) setOpen(false)
      else setOpen(true)
  }

  const newConversation = () => {
    setConversation((conversations) => [...conversation,messages])
  }

  return (
    <>
    
      <div className={`grid ${open ? 'grid-cols-p' : 'grid-cols-1'} w-screen h-screen`}>
        <aside className={`${open ? '' : 'hidden'}`}>
          <div className='flex justify-evenly'>
            <img src={newIcon} onClick={newConversation}></img>
            <p>New Chat</p>
          </div>

          <div className=''>
            <ChatHistory chatTitle={"holaaaaaaa"}/>
          </div>

        </aside>
      <div className='flex flex-col h-screen bg-slate-100'>
        <div className='flex flex-row'>
        <img src={bar} className=' w-5 mx-3' onClick={moveBar}></img> 
        <nav className=' m-5'>
          <p className=' text-lg'>Chat</p>
        </nav>
        </div>
        <div className='flex flex-col justify-between h-full'>
          
            {messages.length == 0 ? <InitPage/> : <div className={`overflow-auto max-h-[calc(100vh-10rem)] mx-5`}> {messages.map((m) => <ChatBurbble text={m.text} isUser={m.isUser}/>)}</div>}
          
          <div className='flex '>
            <input className=' m-3 w-full min-h-9 p-4 break-words border border-gray-300 rounded-lg bg-gray-400 focus:bg-gray-200 focus:ring-blue-500 focus:border-blue-500' 
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
      </div>
      
    </>
  )
}

export default App
