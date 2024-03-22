import trashIcon from '../assets/trash.svg' 

export default function ChatHistory({chatTitle}){

    return (
        
        <div className='flex flex-row justify-around bg-gray-200 p-2 hover:bg-gray-300'>
            <p>{chatTitle}</p>
            <img src={trashIcon}  className=' w-4'></img>
        </div>
        
    )
}