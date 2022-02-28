const initialState = {
  chatId: "null"
};

export default function chatReducer(state = initialState, action){
  switch (action.type) {
    case "SET_CHATID":
      state = {...state, chatId: action.payload}
      return state;
    default:
      return state;
  }
};