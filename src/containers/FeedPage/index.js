import React, { Component } from "react";
import ButtonAppBar from "../../components/AppBar";
import MyTextField, { MyTextArea } from "../../components/input";
import ButtonStyle from "../../components/button"
import { push } from "connected-react-router"
import { connect } from "react-redux"
import { routes } from "../Router"
import { publishPost, getPosts } from "../../actions";
import Post from "../../components/Post";

class FeedPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        title: "",
        text: ""
      }
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

  render() {

    return (
      <div>
        <ButtonAppBar
          pageName="Timeline"
          btnText="Logout"
          onClick={this.props.goToLoginPage}
        />
        <form onSubmit={this.handleSubmit}>
          <MyTextField
            type="text"
            name="title"
            label="Titulo do Post"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.title}
          />
          <MyTextArea
            type="text"
            name="text"
            label="Texto do Post"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.text}
          />
          <ButtonStyle
            btnText="Publicar"
            type="submit"
          />
        </form>
        {this.props.postList.sort((a, b) => {
        return b.createdAt - a.createdAt
        })
        .map(cadaPost => (
          <Post post={cadaPost} />

        ))}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postList: state.posts.postList
})

const mapDispatchToProps = (dispatch) => ({
  goToLoginPage: () => dispatch(push(routes.login)),
  publishPost: (form) => dispatch(publishPost(form)),
  getPostList: () => dispatch(getPosts())

})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);