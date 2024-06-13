import React from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
    return (
        <div>
            {
                comments.map((com, ind) => {
                    return (
                        <div key={ind}>

                            <Comment data={com} />
                            <div className='pl-5 border border-l-black ml-5'>
                                <CommentList comments={com?.replies} />

                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default CommentList