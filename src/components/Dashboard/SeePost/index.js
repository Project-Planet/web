import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Post from "./Post";

const SeePost = ({ Posts, userId, userDetails, userDocId }) => {
  const { id } = useLocation().state;
  const currentPost = Posts && Posts.filter((post) => post.postId === id);
  const post = currentPost.length > 0 && currentPost[0];
  return (
    <>
      {post ? (
        <Post
          post={post}
          userId={userId}
          userDetails={userDetails}
          userDocId={userDocId}
        />
      ) : (
        "No Post found"
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  Posts: state.posts.allPosts,
  userId: state.auth.userId,
  userDetails: state.userDetail.userDetails,
  userDocId: state.userDetail.userDocId,
});

export default connect(mapStateToProps, null)(SeePost);
