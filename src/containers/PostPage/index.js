import React, { Component } from "react";
import ButtonAppBar from "../../components/AppBar";
import MyTextField, { MyTextArea } from "../../components/input";
import ButtonStyle from "../../components/button"
import { push, goBack } from "connected-react-router"
import { connect } from "react-redux"
import { routes } from "../Router"
import { publishPost, getPosts, publishComments } from "../../actions";
import Post from "../../components/Post";


class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  // componentDidMount() {
  //   const token = localStorage.getItem("token")
  //   if (token === null) {
  //     this.props.goToLoginPage()
  //   } else {
  //     this.props.getPostList()
  //   }
  // }

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

  render() {

    return (
      <div>
        <ButtonAppBar
          pageName="Comentários da Timeline"
          btnText="Voltar"
          onClick={this.props.goBack}
        />
        <Post post={this.props.post} />

        <form onSubmit={this.handleSubmit}>

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
        </form>
        {this.props.post.comments.sort((a, b) => {
          return b.createdAt - a.createdAt
        })
          .map(cadaComentario => (
            <Post post={cadaComentario} />

          ))}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.post
})

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBack()),
  publishComments: (postId, text) => dispatch(publishComments(postId, text)),
  getPostList: () => dispatch(getPosts())

})

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);