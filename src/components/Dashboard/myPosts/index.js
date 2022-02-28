import React from "react";
import { connect } from "react-redux";
import PostCard from "./PostCard";

import "../../Styles/myPosts.css";

const MyPosts = ({ postsLoading, Posts, userId }) => {
  let posts =
    Posts &&
    Posts.filter((post) => (post.post.postedBy === userId ? post : null));
  return (
    <div className="container-fluid">
      <h1 className="display-2 py-3 pb-5 text-center">My Posts</h1>
      <div className="row d-flex flex-wrap">
        {postsLoading ? (
          <h1 className="text-center">Loading</h1>
        ) : posts.length > 0 ? (
          posts.map((post, i) => <PostCard key={i} i={i} post={post} />)
        ) : (
          <h1 className="text-center mx-auto">No Posts Found</h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Posts: state.posts.allPosts,
  postsLoading: state.posts.postsLoading,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, null)(MyPosts);
