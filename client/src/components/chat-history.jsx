import trashIcon from '../assets/trash.svg' 

export default function ChatHistory({chatTitle}){

    return (
        
        <div className='flex flex-row'>
            <p>{chatTitle}</p>
            <img src={trashIcon}  className=' w-4'></img>
        </div>
        
    )
}