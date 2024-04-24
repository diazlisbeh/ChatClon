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
import { useSelector, useDispatch } from 'react-redux'
import { addMessage, setLoading } from './store/chatSlice'
import Loading from './components/loading'

function App() {


  // const [messages, setMessages] = useState([])
  const [text, setText] = useState('')
  const { getResponse } = useChat()
  const [open, setOpen] = useState(true)
  const [conversations, setConversation] = useState()
  const messages = useSelector((state) => state.chat.messages)
  const loading = useSelector((state) => state.chat.loading)
  const dispatch = useDispatch()

  const sendText = async (e) => {
    dispatch(addMessage({ text: text, isUser: true }))

    dispatch(setLoading(true))
    let response = getResponse(text)
    // dispatch(setLoading(false))
    console.log(messages)
    setText('')


  }

  const formattext = () => {
   }

  const onEnter = (e) => {
    if (e.key == 'Enter') {
      sendText()
    }
  }

  const moveBar = () => {
    if (open) setOpen(false)
    else setOpen(true)
  }

  const newConversation = () => {
    setConversation((conversations) => [...conversation, messages])
  }

  return (
    <>

      {/* <div className={`grid ${open ? 'grid-cols-p' : 'grid-cols-1'} w-screen h-screen`}> */}
      <div className={`flex flex-row w-screen h-screen `}>
        <aside className={`top-0 left-0 h-screen  bg-gray-200 ${open ? 'visible w-64 basis-64' : ' invisible w-0'}`}>
          <div className='flex justify-evenly my-5'>
            <p>New Chat</p>
            <img src={newIcon} onClick={newConversation}></img>
          </div>

          <div className=' overflow-x-hidden max-h-[calc(100vh-5rem)]'>
            <ChatHistory chatTitle={"holaaaaaaa"} />
            <ChatHistory chatTitle={"holaaaaaaa"} />
          </div>

        </aside>

        <div className={`flex flex-col w- h-screen basis-full  bg-slate-100`}>
          <div className='flex  flex-row'>
            <img src={bar} className=' w-5 mx-3' onClick={moveBar}></img>
            <nav className=' m-5'>
              <p className=' text-lg'>Chat</p>
            </nav>
          </div>
          <div className='flex flex-col justify-between h-full'>

            {messages.length == 0 ?
              <InitPage /> :
              <div className={`overflow-auto max-h-[calc(100vh-10rem)] mx-5`}> {messages.map((m, i) =>

                <ChatBurbble text={m.text} isUser={m.isUser} />)}</div>}
            {loading && <div className='overflow-auto max-h-[calc(100vh-10rem)] mx-5'><Loading isUser={false} /></div>}

            <div className='flex '>
              <input className=' m-3 w-full min-h-9 p-4 break-words border border-gray-300 rounded-lg bg-gray-400 focus:bg-gray-200 focus:ring-blue-500 focus:border-blue-500'
                type='text' value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => onEnter(e)}
              ></input>
              <img className='w-8 mr-3'
                src={sendIcon}
                onClick={(e) => {

                  sendText(e);
                }}
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
