import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from "../utils/constant"
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        // it will only once
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API)
        const jsonData = await data.json()
        setVideos(jsonData?.items)
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {
                videos.map((video) =>
                (
                    <Link to={`/watch?v=${video?.id}`} key={video?.id}>
                        <VideoCard info={video} />
                    </Link>
                ))
            }

        </div>
    )
}

export default VideoContainer