const initialState = {
  userProfileData: null,
  userProfileLoading: true,
  userProfilePosts: [],
};

export default function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_PROFILE_DATA":
      state = { ...state, userProfileData: action.payload };
      return state;
    case "SET_USER_PROFILE_LOADING":
      state = { ...state, userProfileLoading: action.payload };
      return state;
    case "SET_USER_PROFILE_POSTS":
      state = { ...state, userProfilePosts: action.payload };
      return state;
    case "RESET_USER_PROFILE":
      state = initialState;
      return state;
    default:
      return state;
  }
}
