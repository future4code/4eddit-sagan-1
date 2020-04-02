const initialState = {
  postList: [],
  post: undefined
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST_LIST":
      return {
        ...state, postList: action.payload.listPost
      }
    case "SET_POST_DETAILS":
      return {
        ...state, post: action.payload.post
      }
    default:
      return {
        ...state
      }
  }
}

export default posts