import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info

    const { channelTitle, title, thumbnails } = snippet

    return (
        <div className='p-2 m-2 w-72 shadow-lg cursor-pointer'>
            <img className='rounded-lg' src={thumbnails?.medium?.url} alt="Network Error" />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics?.viewCount} <code>views</code> </li>
            </ul>
        </div>
    )
}

export default VideoCard