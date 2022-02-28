import React from "react";
import { useHistory } from "react-router";
import "../../Styles/PostCard.css";
import fire from "../../APIS/firebase";
import { toast } from "react-toastify";
import { connect } from "react-redux";

const PostCard = ({ i, post, filterPosts }) => {
  const history = useHistory();

  const deletePost = (postId) => {
    fire
      .storage()
      .ref()
      .child("posts")
      .child(postId)
      .listAll()
      .then((listResults) => {
        const promises = listResults.items.map((item) => {
          return item.delete();
        });
        Promise.all(promises);
      })
      .then((img) => {
        fire
          .firestore()
          .collection("posts")
          .doc(postId)
          .delete()
          .then((post) => {
            filterPosts(postId);
            return toast.success("Post deleted successfully!!");
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
    <div className="col-md-5 px-0 card mx-auto my-5 pb-3 postCard" key={i}>
      {post && post.post.verified ? (
        <p
          className="post-status bg-success px-2 py-1 text-white position-absolute "
          style={{ zIndex: 999, right: "3%", top: "3%" }}
        >
          Verified
        </p>
      ) : (
          <p
            className="post-status bg-danger px-2 py-1 text-white position-absolute"
            style={{ zIndex: 999, right: "3%", top: "3%" }}
          >
            Not Verified
          </p>
        )}
      {post && post.post.images.length > 1 ? (
        <>
          <div
            id={`carouselExampleIndicatorsMyPosts${i}`}
            className="carousel slide card-img-top"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target={`carouselExampleIndicatorsMyPosts${i}`}
                data-slide-to="0"
                className="active"
              ></li>
              {post.post.images
                .slice(1, post.post.images.length)
                .map((image, i) => (
                  <li
                    data-target={`carouselExampleIndicatorsMyPosts${i}`}
                    data-slide-to={i + 1}
                    key={i}
                  ></li>
                ))}
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={post.post.images[0]}
                  className="d-block w-100 card-img-top card-img-top"
                  alt={`image ${1}`}
                />
              </div>
              {post.post.images
                .slice(1, post.post.images.length)
                .map((image, i) => (
                  <div className="carousel-item" key={i}>
                    <img
                      src={image}
                      className="d-block w-100 card-img-top"
                      alt={`image ${i + 1}`}
                    />
                  </div>
                ))}
            </div>
            <a
              className="left carousel-control-prev"
              href={`#carouselExampleIndicatorsMyPosts${i}`}
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
              href={`#carouselExampleIndicatorsMyPosts${i}`}
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
          <img src={post.post.images[0]} className="card-img-top" alt="image" />
        )}
      <div className="card-body">
        <h1 className="card-title">{post ? post.post.title : "Loading.."}</h1>
        <p className="card-text">
          {post ? post.post.description.substring(0, 100) + "..." : "Loading.."}
        </p>
        <hr />
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <h5>
            <strong>Likes:</strong> {post.post.likes}
          </h5>
          <p className="bg-primary py-1 px-3 text-white text-capitalize">
            {post.post.category}
          </p>
        </div>
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <button
            className="btn btn-primary"
            onClick={() =>
              history.push({
                pathname: `/dashboard/${!post.postedByData.data.ngo
                  ? post.postedByData.data.firstName +
                  " " +
                  post.postedByData.data.secondName
                  : post.postedByData.data.organizationName
                  }/${post.post.title}`,
                state: { id: post.postId },
              })
            }
          >
            <i className="fas fa-eye"> </i> See Post
          </button>
          <div>
            <button
              className="btn btn-outline-success mx-1"
              onClick={() =>
                history.push(`/dashboard/myPosts/${post.postId}/edit`)
              }
            >
              <i className="fa fa-pencil"></i> Edit Post
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => deletePost(post.postId)}
            >
              <i className="fa fa-trash"></i> Delete Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  filterPosts: (postId) => {
    dispatch({ type: "FILTER_POSTS", payload: postId });
  },
});

export default connect(null, mapDispatchToProps)(PostCard);
