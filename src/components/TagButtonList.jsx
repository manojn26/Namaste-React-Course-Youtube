import React from 'react'
import Button from './Button'


const TagButtonList = () => {
    const list = ["All", "Cricket", "Sports", "Songs", "Bollywood", "News", "Food", "Trending", "Worlcup"]
    return (
        <div className='flex justify-center'>
            {
                list.map((val, ind) => <Button key={ind} name={val} />)
            }
        </div>
    )
}

export default TagButtonList