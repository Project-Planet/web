import React from "react";
import { connect } from "react-redux";
import Post from "../Dashboard/components/Post";

const ShowPosts = ({
  postLoading,
  allPosts,
  userId,
  userDocId,
  userDetails,
}) => {
  const posts = allPosts.allPosts.filter((post) => post.post.verified && post);

  if (postLoading) {
    return "Loading...";
  }
  if (!posts.length > 0) {
    return <h1 className="text-center">No posts found</h1>;
  }
  return posts.map((post, id) => (
    <Post
      post={post}
      key={id}
      id={id}
      userId={userId}
      userDocId={userDocId}
      userDetails={userDetails}
    />
  ));
};

const mapStateToProps = (state) => ({
  postLoading: state.posts.postsLoading,
  allPosts: state.posts,
  myPosts: state.posts.allPosts.map((post) => post),
  userDocId: state.userDetail.userDocId,
  userDetails: state.userDetail.userDetails,
});

export default connect(mapStateToProps, null)(ShowPosts);
