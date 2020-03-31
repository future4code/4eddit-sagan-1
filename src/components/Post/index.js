import React from 'react'


export default function Post(props){
    return(
        <div>
            <p>{props.post.username}</p>
            <p>{props.post.text}</p>
            <p>{props.post.votesCount}</p>
            <p>{props.post.commentsCount}</p>
            <hr/>
        </div>
    )
}