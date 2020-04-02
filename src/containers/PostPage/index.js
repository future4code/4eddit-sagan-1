import React, { Component } from "react";
import ButtonAppBar from "../../components/AppBar";
import MyTextField, { MyTextArea } from "../../components/input";
import ButtonStyle from "../../components/button"
import { push, goBack } from "connected-react-router"
import { connect } from "react-redux"
import { routes } from "../Router"
import { publishPost, getPosts, publishComments, voteComment } from "../../actions";
import Post from "../../components/Post";
import styled from 'styled-components'

const PageWrapper = styled.div`
   width: 100%;
   min-height: calc(100vh - 16px);
   display:flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color:#EDF1F9;
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  min-height: calc(100vh - 80px);
  border-right: 2px solid #4472C4;
  border-left: 2px solid #4472C4;
  background-color: white;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  flex-direction:column;
`
const FormStyle = styled.form`
  width: 70%;
  margin: 15px 0;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
`
const PostList = styled.div`
  width: 70%;
  height:100%;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
`


class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginPage()
    } else {
      this.props.getPostList()
    }
  }

  handleInputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.publishComments(this.props.post.id, this.state.text)
    this.setState({
      text: '',
    })
  }

  handleLike = (post, comment) => {
    let currentVote = comment.userVoteDirection
    if (currentVote === 1) {
      currentVote = 0
      this.props.voteComment(post.id, comment.id, currentVote)
    }
    else {
      currentVote = 1
      this.props.voteComment(post.id, comment.id, currentVote)
    }
  }
  handleDislike = (post, comment) => {
    let currentVote = comment.userVoteDirection
    if (currentVote === -1) {
      currentVote = 0
      this.props.voteComment(post.id, comment.id, currentVote)
    }
    else {
      currentVote = -1
      this.props.voteComment(post.id, comment.id, currentVote)
    }
  }

  render() {
    const { post } = this.props
    return (
      <PageWrapper>
        <ButtonAppBar
          pageName="Comentários da Timeline"
          btnText="Voltar"
          onClick={this.props.goBack}
        />
        <ContentWrapper>
          <PostList>
            {post && <Post content={post} />}
          </PostList>

          <FormStyle onSubmit={this.handleSubmit}>
            <MyTextArea
              type="text"
              name="text"
              label="Escreva seu comentário"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.text}
            />
            <ButtonStyle
              btnText="Comentar"
              type="submit"
            />
          </FormStyle>
          <PostList>
            {post ?
             post.comments.sort((a, b) => {
              return b.createdAt - a.createdAt
            })
              .map(cadaComentario => (
                <Post
                  key={cadaComentario.id}
                  content={cadaComentario}
                  onClickLike={() => this.handleLike(post, cadaComentario)}
                  onClickDislike={() => this.handleDislike(post, cadaComentario)}
                />
              )) :
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            }
          </PostList>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post
})

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBack()),
  publishComments: (postId, text) => dispatch(publishComments(postId, text)),
  getPostList: () => dispatch(getPosts()),
  voteComment: (postId, commentId, direction) => dispatch(voteComment(postId, commentId, direction))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);