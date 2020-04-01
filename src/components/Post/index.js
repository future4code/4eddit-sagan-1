import React from 'react'
import styled from 'styled-components'



const PostWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #4472C4;
    margin: 3% 0;

`
const PostHeader = styled.div`
    background-color: #4472C4;
    color: white;
    border-radius: 5px 5px 0 0;
    height:30px;
    font-size:1.1rem;
`
const PostContent = styled.div`
    min-height:80px;
`

const PostActions = styled.div`
    background-color:#4472C4;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 10px;
    height:30px;
    .fa{
        color:white;
        margin: 0 3px;
        font-size:1.1rem;
        cursor: pointer;
    }
    .fa:last-of-type{
      margin-right: 6px;
    }
`



export default function Post(props) {
  const { content } = props
  return (
    <PostWrapper>
      <PostHeader>
        {content.title ?
          <>
            {content.username} <em> - {content.title}</em>
          </> :
          <>
            {content.username}
          </>
        }
      </PostHeader>

      <PostContent >
        {content.text}
      </PostContent>

      <PostActions>
        <span>
          <i className="fa fa-thumbs-up" aria-hidden="true" onClick={props.onClickLike} ></i>
          <i className="fa fa-thumbs-down" aria-hidden="true" onClick={props.onClickDislike}></i>
          {content.votesCount || 0}
        </span>
        {content.commentsCount !== undefined &&
          <span>
            <i className="fa fa-commenting" aria-hidden="true" onClick={props.onClickComment}></i>
            {content.commentsCount}
          </span>}
      </PostActions>

    </PostWrapper>
  )
}
