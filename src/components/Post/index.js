import React from 'react'
import styled from 'styled-components'



const PostWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    border-radius: 3px;
    border: 1px solid #4472C4;
    margin-bottom: 3%;

`
const PostHeader = styled.div`
    background-color: #4472C4;
    color: white;
    border-radius: 3px 3px 0 0;
`
const PostContent = styled.div`
    min-height:80px;
`

const PostActions = styled.div`
    background-color:#4472C4;
    color:white;
    display:flex;
    justify-content:space-between;
    padding: 0 10px;
    .fa{
        color:white;
        margin: 0 3px;
    }
    
`



export default function Post(props) {
    return (
        <PostWrapper>
            <PostHeader>
                {props.post.username}
            </PostHeader>

            <PostContent onClick={props.clicaPost}>
                {props.post.text}
            </PostContent>

            <PostActions>
                <spam>
                    <i className="fa fa-thumbs-up" aria-hidden="true" ></i>
                    <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                    {props.post.votesCount}
                </spam>
                <spam>
                    <i className="fa fa-commenting" aria-hidden="true"></i>
                    {props.post.commentsCount}
                </spam>
            </PostActions>

        </PostWrapper>
    )
}
