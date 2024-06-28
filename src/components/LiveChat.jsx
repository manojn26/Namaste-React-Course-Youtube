import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from "../utils/chatSlice"
import { generateNames } from '../utils/helper'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")


    const dispatch = useDispatch()

    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const interval = setInterval(() => {
            // API Polling
            // console.log("Live Chat Data");
            dispatch(addMessage({
                name: generateNames(),
                message: "I love this video"
            }))
        }, 2000)

        return () => clearInterval(interval)

    }, [])

    return (
        <>
            <div className='ml-2 mr-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {
                        chatMessages.map((data, index) => <ChatMessage key={index} name={data?.name} message={data?.message} />)
                    }
                </div>
            </div>

            <form className='w-full p-2 ml-2 mt-2 border border-black ' onSubmit={(e) => {
                e.preventDefault()
                console.log("On Submit" + liveMessage)
                dispatch(addMessage({
                    name: "Manoj",
                    message: liveMessage
                }))
                setLiveMessage("")
            }}>
                <input className='w-72 border border-gray-400' type="text" name="" id="" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='ml-4 border bg-green-700 text-white border-gray-400 px-2 rounded-lg'>Sent</button>
            </form>
        </>
    )
}

export default LiveChat