import Markdown from 'react-markdown'

export default function Loading({text,isUser}) {

    return (
        <div class="flex gap-2.5">
            <div class={`flex flex-col w-full ${isUser ? "items-end" : " items-start"}`}>
                <div class="flex space-x-2 rtl:space-x-reverse">
                    <span class="text-sm font-semibold text-gray-900">{isUser ? "User" : "Chat"}</span>
                    <span class="text-sm font-normal text-gray-500 ">{new Date(Date.now()).toDateString()}</span>
                </div>
                <div class='flex space-x-2 justify-center items-center my-2'>
                    <span class='sr-only'>Loading...</span>
                    <div class='h-4 w-4 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                    <div class='h-4 w-4 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                    <div class='h-4 w-4 bg-gray-400 rounded-full animate-bounce'></div>
                </div>
               
                {/* } */}

            </div>
        </div>
    )
}