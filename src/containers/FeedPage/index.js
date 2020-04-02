import React, { Component } from "react";
import styled from 'styled-components';
import { push } from "connected-react-router";
import { connect } from "react-redux";

import { publishPost, getPosts, getPostDetails, votePost } from "../../actions";

import { routes } from "../Router";
import MyTextField, { MyTextArea } from "../../components/input";
import ButtonStyle from "../../components/button";
import ButtonAppBar from "../../components/AppBar";
import Post from "../../components/Post";

const PageWrapper = styled.div`
   width: 100%;
   min-height: calc(100vh - 16px);
   display:flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color:#EDF1F9;
   .fa-spinner{
     color:#4472C4
   }
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

class FeedPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: "",
        text: ""
      },
      searchInputValue: ''
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
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSearchInputValue = (e) => {
    this.setState({
      searchInputValue: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.publishPost(this.state.form)
    this.setState({
      form: {
        title: '',
        text: '',
      }
    })
  }

  handleLike = (post) => {
    let currentVote = post.userVoteDirection

    if (currentVote === 1) {
      currentVote = 0
      this.props.votePost(post.id, currentVote)
    } else {
      currentVote = 1
      this.props.votePost(post.id, currentVote)
    }
  }

  handleDislike = (post) => {
    let currentVote = post.userVoteDirection
    if (currentVote === -1) {
      currentVote = 0
      this.props.votePost(post.id, currentVote)
    } else {
      currentVote = -1
      this.props.votePost(post.id, currentVote)
    }
  }

  handleGetPostDetails = (postId) => {
    this.props.getPostDetails(postId)
    this.props.goToPostPage()
  }

  render() {
    const { postList, goToLoginPage } = this.props
    const { searchInputValue, form } = this.state
    return (
      <PageWrapper>
        <ButtonAppBar
          pageName="Timeline"
          btnText="Logout"
          onClick={goToLoginPage}
          searchValue={searchInputValue}
          onChangeSearchInputValue={this.handleSearchInputValue}
        />
        <ContentWrapper>
          <FormStyle onSubmit={this.handleSubmit}>
            <MyTextField
              type="text"
              name="title"
              label="Titulo do Post"
              required={true}
              onChange={this.handleInputValue}
              value={form.title}
            />
            <MyTextArea
              type="text"
              name="text"
              label="Texto do Post"
              required={true}
              onChange={this.handleInputValue}
              value={form.text}
            />
            <ButtonStyle
              btnText="Publicar"
              type="submit"
            />
          </FormStyle>
          <PostList>
            {postList.length > 0 ?
              postList.filter(cadaPost => (
                searchInputValue ?
                  cadaPost.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes((searchInputValue).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) ||
                  cadaPost.text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes((searchInputValue).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
                  : true
              ))
                .sort((a, b) => {
                  return b.createdAt - a.createdAt
                })
                .map(cadaPost => (
                  <Post
                    key={cadaPost.id}
                    content={cadaPost}
                    onClickComment={() => this.handleGetPostDetails(cadaPost.id)}
                    onClickLike={() => this.handleLike(cadaPost)}
                    onClickDislike={() => this.handleDislike(cadaPost)}
                  />
                ))
              : <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            }
          </PostList>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  postList: state.posts.postList
})

const mapDispatchToProps = (dispatch) => ({
  goToLoginPage: () => dispatch(push(routes.login)),
  goToPostPage: () => dispatch(push(routes.post)),
  publishPost: (form) => dispatch(publishPost(form)),
  getPostList: () => dispatch(getPosts()),
  getPostDetails: (postId) => dispatch(getPostDetails(postId)),
  votePost: (postId, direction) => dispatch(votePost(postId, direction))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);