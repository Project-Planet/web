import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getPosts } from "../../../redux/actionCreaters";
import fire from "../../APIS/firebase";

import "./../dashboard.css";
import "../../Styles/PostBox.css";

const Post = ({ post, userId, userDetails, userDocId, getPosts }) => {
  const history = useHistory();
  const liked = post.post.likedBy.filter((like) =>
    like === userId ? like : null
  );
  const likePost = () => {
    let like = post.post.likedBy;
    let userLikedPosts = userDetails.likedPosts;
    let likes = post.post.likes;
    const alreadyLiked = post.post.likedBy.filter((lke) =>
      lke === userId ? lke : null
    );
    // post.likedBy.push(userId);
    // post.likes += 1;
    if (alreadyLiked.length < 1) {
      like.push(userId);
      userLikedPosts.push(post.postId);
      likes++;
    } else {
      like = like.filter((lke) => lke !== userId && lke);
      userLikedPosts = userLikedPosts.filter(
        (lke) => lke !== post.postId && lke
      );
      likes--;
    }

    fire
      .firestore()
      .collection("posts")
      .doc(post.postId)
      .update({
        likedBy: like,
        likes,
      })
      .then((doc) => {
        fire
          .firestore()
          .collection("users")
          .doc(userDocId)
          .update({
            likedPosts: userLikedPosts,
          })
          .then((doc) => {
            getPosts();
            if (alreadyLiked.length < 1) {
              return toast.success("Added to liked Posts");
            }
            return toast.dark("Removed from liked Posts");
          })
          .catch((err) => {
            return toast.error(err.message);
          });
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };
  return (
    <div className="postBox container-fluid">
      {post && post.post.images.length > 1 ? (
        <>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              {post.post.images
                .slice(1, post.post.images.length)
                .map((image, i) => (
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={i + 1}
                    key={i}
                  ></li>
                ))}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={post.post.images[0]}
                  className="d-block w-100"
                  alt={`image ${1}`}
                />
              </div>
              {post.post.images
                .slice(1, post.post.images.length)
                .map((image, i) => (
                  <div className="carousel-item" key={i}>
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`image ${i + 1}`}
                    />
                  </div>
                ))}
            </div>
            <a
              className="left carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className=" right carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </>
      ) : (
          <div className="img">
            <img src={post.post.images[0]} alt="Post" />
          </div>
        )}
      <div className="row pt-5 px-5">
        <div className="col-md-4 pl-5">
          <div className="profile d-flex align-items-center justify-content-between">
            <div className="profile-pic ml-2">
              {post.postedByData.data.profilePic ? (
                <img src={post.postedByData.data.profilePic} alt={"profile"} />
              ) : !post.postedByData.data.ngo ? (
                <p>
                  {post.postedByData.data.firstName
                    ? post.postedByData.data.firstName.charAt(0) +
                    post.postedByData.data.secondName.charAt(0)
                    : "UN"}
                </p>
              ) : (
                    <p>
                      {post.postedByData.data.orgnizationName
                        ? post.postedByData.data.orgnizationName
                          .split(" ")[0]
                          .charAt(0) +
                        post.postedByData.data.orgnizationName
                          .split(" ")[1]
                          .charAt(0)
                        : "UN"}
                    </p>
                  )}
            </div>
            <Link
              to={{
                pathname: `/dashboard/profile/${post.postedByData.data.uid}/${!post.postedByData.data.ngo
                  ? post.postedByData.data.firstName
                    ? post.postedByData.data.firstName +
                    " " +
                    post.postedByData.data.secondName
                    : "Un Named"
                  : post.postedByData.data.organizationName
                    ? post.postedByData.data.organizationName
                    : "Un Named"
                  }`,
              }}
              className="text-dark"
            >
              <h1 className="text">
                {!post.postedByData.data.ngo
                  ? post.postedByData.data.firstName
                    ? post.postedByData.data.firstName +
                    " " +
                    post.postedByData.data.secondName
                    : "Un Named"
                  : post.postedByData.data.organizationName
                    ? post.postedByData.data.organizationName
                    : "Un Named"}
              </h1>
            </Link>
          </div>
        </div>
        <div className="col-md-3 ml-auto d-flex align-items-center justify-content-center">
          <p className="bg-primary mt-3 mr-2 text-center text-white py-2 px-4">
            {post.postedByData.data.joinedAs}
          </p>
          <button className="btn btn-dark" onClick={() => history.goBack()}>
            <i class="fa fa-angle-left"></i> Go Back
          </button>
        </div>
      </div>
      <div className="row px-5">
        <div className="col-md-12 p-5">
          <h1 className="SeePost__post_title display-3">{post.post.title.toUpperCase()}</h1>
          <p
            className="description text-left pr-5 py-5 text-wrap"
            style={{ wordWrap: "break-word" }}
          >
            {post.post.description}
          </p>
        </div>
      </div>
      {post.post.postedBy === userId ? (
        <div className="row text-center pb-3">
          <div className="col-md-5 mx-auto">
            <h1 className="font-weight-lighter pb-3 border-bottom border-primary text-weight-light ">
              Interested People
            </h1>
            {post.post.interested.length > 1 ? (
              JSON.stringify(post.post.interested)
            ) : (
                <h3 className="text-center my-3">No Interested People Found</h3>
              )}
          </div>
          <div className="col-md-5 mx-auto">
            <button
              type="button"
              onClick={() =>
                history.push(`/dashboard/myPosts/${post.postId}/edit`)
              }
              className="btn btn-outline-primary mr-2"
            >
              <i className="fa fa-pencil"></i> Edit Post
            </button>
            <button
              type="button"
              className={`like-icon btn ${liked.length > 0 ? "btn-dark" : null
                }`}
              onClick={() => likePost()}
            >
              <i
                className={`fas fa-thumbs-up ${liked.length > 0 ? "text-white" : "text-dark"
                  }`}
              >
                &nbsp;{" "}
              </i>{" "}
              Like {post.post.likes}
            </button>
          </div>
        </div>
      ) : (
          <div className="row text-center pb-5">
            <button
              type="button"
              className={`like-icon mx-auto d-flex align-items-center btn ${liked.length > 0 ? "btn-dark" : null
                }`}
              onClick={() => likePost()}
            >
              <i
                className={`fas fa-thumbs-up ${liked.length > 0 ? "text-white" : "text-dark"
                  }`}
              >
                &nbsp;{" "}
              </i>{" "}
            Like {post.post.likes}
            </button>
            <div class="col-md-4 mx-auto">
              <button className="btn btn-outline-primary mr-2">
                <i className="fas fa-heart"></i> Interested
            </button>
              <button
                className="btn btn-danger"
                onClick={() =>
                  toast.dark("This feature will come in upcoming updates!!")
                }
              >
                <i className="fas fa-exclamation-triangle"></i> Report Post
            </button>
            </div>
          </div>
        )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => {
    dispatch(getPosts());
  },
});
export default connect(null, mapDispatchToProps)(Post);
