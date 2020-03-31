const initialState = {
    postList: []
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POST_LIST":
            return {
                ...state, postList: action.payload.listPost
            }
        default:
            return {
                ...state
            }
    }

}

export default posts
    





