import axios from 'axios'
import { push } from 'connected-react-router'
import { routes } from "../containers/Router"

const baseUrl = 'https://us-central1-future-apis.cloudfunctions.net/fourEddit'

//***** ASSÍNCRONAS*****//
export const signup = (form) => async dispatch => {
  let dataToSend = { ...form }
  try {
    const response = await axios.post(`${baseUrl}/signup`, dataToSend)

    console.log(`Status Requisição signup: ${response.status}`)
    console.log(`Mensagem Requisição signup: ${response.statusText}`)

    dispatch(push(routes.feed))
  }
  catch (error) {
    console.error(error)
  }
}

export const login = (form) => async dispatch => {
  let dataToSend = { ...form }
  try {
    const response = await axios.post(`${baseUrl}/login`, dataToSend)

    console.log(`Status Requisição login: ${response.status}`)
    console.log(`Mensagem Requisição login: ${response.statusText}`)
    console.log(response.data)

    localStorage.setItem("token", response.data.token)
    dispatch(push(routes.feed))
  }
  catch (error) {
    console.error(error)
  }
}

export const publishPost = (form) => async dispatch => {
  let dataToSend = { ...form }

  const token = localStorage.getItem("token")

  try {

    const response = await axios.post(`${baseUrl}/posts`, dataToSend, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }

    })
    console.log(`Status Requisição feed: ${response.status}`)
    console.log(`Mensagem Requisição feed: ${response.statusText}`)


    window.alert("Post publicado com sucesso!")
    dispatch(getPosts())
  }
  catch (error) {
    console.error(error)
  }

}

export const getPosts = () => async dispatch => {
  const token = localStorage.getItem("token")

  try {
    const response = await axios.get(`${baseUrl}/posts`, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    console.log(`Status Requisição getposts: ${response.status}`)
    console.log(`Mensagem Requisição getposts: ${response.statusText}`)
    dispatch(setPost(response.data.posts))
  }
  catch (error) {
    console.error(error)
  }
}

export const getPostDetails = (postId) => async dispatch => {
  const token = localStorage.getItem("token")

  try {
    const response = await axios.get(`${baseUrl}/posts/${postId}`, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    console.log(`Status Requisição getPostsDetails: ${response.status}`)
    console.log(`Mensagem Requisição getPostsDetails: ${response.statusText}`)
    dispatch(setPostDetails(response.data.post))
    dispatch(push(routes.post))

  }
  catch (error) {
    console.error(error)
  }
}

export const publishComments = (postId, text) => async dispatch => {
  const token = localStorage.getItem("token")
  const dataToSend = { text: text }

  try {
    const response = await axios.post(`${baseUrl}/posts/${postId}/comment`, dataToSend, {
      headers: {
        "Content-Type": "application/json",
        auth: token
      }
    })
    console.log(`Status Requisição createComments: ${response.status}`)
    console.log(`Mensagem Requisição createComments: ${response.statusText}`)
    dispatch(getPostDetails(postId))
  }
  catch (error) {
    console.error(error)
  }
}

//***** SÍNCRONAS*****//

export const setPost = (listPost) => ({
  type: "SET_POST_LIST",
  payload: { listPost, }
})

export const setPostDetails = (post) => ({
  type: "SET_POST_DETAILS",
  payload: { post, }
})