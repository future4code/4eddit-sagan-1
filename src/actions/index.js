import axios from 'axios'
import { push } from 'connected-react-router'
import { routes } from "../containers/Router"

const baseUrl = 'https://us-central1-future-apis.cloudfunctions.net/fourEddit'

//***** ASSÍNCRONAS*****//
export const signup = (form) => async dispatch => {
  let dataToSend = {...form}
  try {
    const response = await axios.post(`${baseUrl}/signup`, dataToSend)

    console.log(`Status Requisição signup: ${response.status}`)
    console.log(`Mensagem Requisição signup: ${response.statusText}`)
    
    dispatch(push(routes.feed))
  }
  catch (error)
  {
    console.error(error)
  }
}