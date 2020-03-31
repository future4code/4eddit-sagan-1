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

//***** SÍNCRONAS*****//

export const setPost = (listPost) => ({
    type: "SET_POST_LIST",
    payload:{listPost, }
})