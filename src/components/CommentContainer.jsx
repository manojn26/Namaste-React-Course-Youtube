import React from 'react'
import Comment from './Comment'
import CommentList from './CommentList'

const commentsData = [

    {
        name: "Manoj",
        text: "I like this video",
        replies: [
            {
                name: "Manoj",
                text: "I like this video",
                replies: []
            },
            {
                name: "Manoj",
                text: "I like this video",
                replies: []
            },
        ]
    },
    {
        name: "Manoj",
        text: "I like this video",
        replies: []
    }, {
        name: "Manoj",
        text: "I like this video",
        replies: [
            {
                name: "Manoj",
                text: "I like this video",
                replies: [
                    {
                        name: "Manoj",
                        text: "I like this video",
                        replies: [{
                            name: "Manoj",
                            text: "I like this video",
                            replies: []
                        }]
                    },
                ]
            },

        ]
    }, {
        name: "Manoj",
        text: "I like this video",
        replies: []
    }, {
        name: "Manoj",
        text: "I like this video",
        replies: []
    },
]

const CommentContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='text-2xl font-bold'>Comments</h1>
            <CommentList comments={commentsData} />
        </div>
    )
}

export default CommentContainer