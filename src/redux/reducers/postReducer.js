const initialState = {
  allPosts: [],
  postsLoading: true,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_POSTS":
      state = {
        ...state,
        allPosts: action.payload,
      };
      return state;
    case "SET_POSTS_LOADING":
      state = { ...state, postsLoading: action.payload };
      return state;
    case "FILTER_POSTS":
      const posts = state.allPosts.filter((post) =>
        post.postId === action.payload ? null : post
      );
      state = { ...state, allPosts: posts };
      return state;
    case "RESET_POSTS":
      state = { allPosts: [], postsLoading: true };
      return state;
    default:
      return state;
  }
}
