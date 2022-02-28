import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//react toastify
import "react-toastify/dist/ReactToastify.css";

// redux
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import authReducer from "./redux/reducers/authReducer";
import userDetailReducer from "./redux/reducers/userDetailReducer";
import postReducer from "./redux/reducers/postReducer";
import userProfileReducer from "./redux/reducers/userProfileReducer";
import chatReducer from "./redux/reducers/chatReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  userDetail: userDetailReducer,
  posts: postReducer,
  userProfile: userProfileReducer,
  chat: chatReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    <df-messenger intent="WELCOME" chat-title="Green-Arrow" agent-id="c47750b0-7a9f-41c6-9982-fd8d07d91776" language-code="en"></df-messenger>

  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
