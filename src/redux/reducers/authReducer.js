const initialState = {
  isLogined: false,
  user: [],
  userId: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_AUTH":
      state = { ...state, isLogined: action.payload };
      return state;
    case "SET_USER":
      state = { ...state, user: action.payload };
      return state;
    case "SET_USERID":
      state = { ...state, userId: action.payload };
      return state;
    default:
      return state;
  }
}
