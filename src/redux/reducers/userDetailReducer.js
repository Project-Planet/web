const initialState = {
  userDetails: [],
  userDocId: null,
  isLoading: true,
};

export default function userDetailReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_DETAILS":
      state = {
        ...state,
        userDetails: action.payload.data,
        userDocId: action.payload.id,
      };
      return state;
    case "SET_USER_LOADING":
      state = { ...state, isLoading: action.payload };
      return state;
    case "RESET_USER_DETAILS":
      state = { userDetails: false, userDocId: null, isLoading: true };
      return state;
    default:
      return state;
  }
}
