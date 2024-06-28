import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm p-2'>
            <img className='h-8' src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Not Loaded" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage