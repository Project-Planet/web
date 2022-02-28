import fire from "../components/APIS/firebase";

// user Detail

export const UserDetailLoading = (message) => ({
  type: "SET_USER_LOADING",
  payload: message,
});
export const addUserDetails = (data) => ({
  type: "SET_USER_DETAILS",
  payload: data,
});

export const getUserDetails = (userId) => (dispatch) => {
  dispatch(UserDetailLoading(true));
  if (userId) {
    fire
      .firestore()
      .collection("users")
      .where("uid", "==", userId)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          dispatch(addUserDetails({ data: doc.data(), id: doc.id }));
          dispatch(UserDetailLoading(false));
        });
      });
  }
};

// posts

export const PostDetailLoading = (message) => ({
  type: "SET_POSTS_LOADING",
  payload: message,
});
export const addPosts = (data) => ({
  type: "SET_POSTS",
  payload: data,
});

export const getPosts = () => {
  return (dispatch) => {
    dispatch(PostDetailLoading(true));
    const postsRef = fire.firestore().collection("posts");
    const posts = [];
    postsRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.id !== "test posts") {
          let data = doc.data();
          const ref = fire.firestore().collection("users");

          ref
            .where("uid", "==", data.postedBy)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc2) => {
                posts.push({
                  post: data,
                  postId: doc.id,
                  postedByData: { data: doc2.data(), id: doc2.id },
                });
                dispatch(PostDetailLoading(false));
                return dispatch(addPosts(posts));
              });
            });
        }
      });
    });
  };
};

// user profile

export const userProfileLoading = (message) => ({
  type: "SET_USER_PROFILE_LOADING",
  payload: message,
});
export const userProfileData = (data) => ({
  type: "SET_USER_PROFILE_DATA",
  payload: data,
});
export const userProfilePosts = (data) => ({
  type: "SET_USER_PROFILE_POSTS",
  payload: data,
});

export const getUserProfileData = (id) => (dispatch) => {
  dispatch(userProfileLoading(true));
  fire
    .firestore()
    .collection("users")
    .where("uid", "==", id)
    .onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        const data = { data: doc.data(), id: doc.id };
        dispatch(userProfileData(data));
        dispatch(userProfileLoading(false));
      });
    });
};
export const getUserProfilePosts = (id) => (dispatch) => {
  fire
    .firestore()
    .collection("posts")
    .where("postedBy", "==", id)
    .onSnapshot((snapshot) => {
      const posts = [];
      snapshot.forEach((doc) => {
        const data = { postData: doc.data(), postId: doc.id };
        posts.push(data);
      });
      dispatch(userProfilePosts(posts));
    });
};

// chat

export const setChatId = (id) => (dispatch) => {
  dispatch({
    type: "SET_CHATID",
    payload: id,
  })
}