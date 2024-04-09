import Markdown from 'react-markdown'

export default function ChatBurbble({text,isUser}){

    return (
        <div class="flex gap-2.5">
            <div class={`flex flex-col w-full ${isUser ? "items-end" : " items-start"}`}>
                <div class="flex space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-gray-900">{isUser ? "User" : "Chat"}</span>
                    <span class="text-sm font-normal text-gray-500 ">{new Date(Date.now()).toDateString()}</span>
                </div>

                {/* {loading ?  */}
                {/* // <div class='flex space-x-2 justify-center items-center my-2'> */}
                    {/* <span class='sr-only'>Loading...</span> */}
                    {/* <div class='h-4 w-4 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div> */}
                    {/* <div class='h-4 w-4 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div> */}
                    {/* <div class='h-4 w-4 bg-gray-400 rounded-full animate-bounce'></div> */}
                {/* </div> */}
                <div className="flex flex-col flex-1  max-w-md break-words my-4 p-4 leading-1.5 border-2 rounded-b-lg rounded-r-lg border-gray-200 bg-gray-100  lg:max-w-6xl">
                    <pre className=' whitespace-pre-wrap'><Markdown>{text}</Markdown></pre>
                </div>
                {/* } */}

            </div>
        </div>
    )
}