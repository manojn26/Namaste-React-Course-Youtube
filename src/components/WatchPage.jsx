import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from "./LiveChat"

const WatchPage = () => {

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"));
    const videoId = searchParams.get("v")

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className='w-full'>
            <div className='px-5 flex w-full'>
                <div>
                    <iframe width="700" height="400" src={`https://www.youtube.com/embed/${videoId}?si=mZem09x8mu0YfQyU`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentContainer />
        </div>
    )
}

export default WatchPage