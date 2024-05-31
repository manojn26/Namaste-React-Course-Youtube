import React from 'react'
import TagButtonList from './TagButtonList'
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
    return (
        <div className='mx-2 px-2'>
            <TagButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer