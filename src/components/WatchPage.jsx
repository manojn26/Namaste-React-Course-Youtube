import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("v"));
    const videoId = searchParams.get("v")

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className='px-5'>
            <iframe width="700" height="400" src={`https://www.youtube.com/embed/${videoId}?si=mZem09x8mu0YfQyU`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage