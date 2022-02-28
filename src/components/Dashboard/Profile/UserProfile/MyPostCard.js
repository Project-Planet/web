import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const MyPostCard = ({ post, id, userProfileData, userId }) => {
  const history = useHistory();
  return (
    <div
      className="postsContainer card my-2 text-dark border"
      key={id}
      style={{
        borderRadius: "5px",
        color: "#eef6f8",
        overflow: "hidden",
      }}
    >
      {post && post.postData.images.length > 1 ? (
        <>
          <div
            id={`carouselExampleIndicatorsMyPosts${id}`}
            className="carousel slide card-img-top"
            data-ride="carousel"
            style={{
              height: "320px",
              borderRadius: "5px 5px 0 0",
              color: "#eef6f8",
              overflow: "hidden",
            }}
          >
            <ol className="carousel-indicators">
              <li
                data-target={`carouselExampleIndicatorsMyPosts${id}`}
                data-slide-to="0"
                className="active"
              ></li>
              {post.postData.images
                .slice(1, post.postData.images.length)
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
                  src={post.postData.images[0]}
                  className="d-block w-100"
                  alt={`image ${1}`}
                />
              </div>
              {post.postData.images
                .slice(1, post.postData.images.length)
                .map((image, i) => (
                  <div className="carousel-item" key={i}>
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`image ${i + 1}`}
                      style={{
                        height: "320px !important",
                      }}
                    />
                  </div>
                ))}
            </div>
            <a
              className="left carousel-control-prev"
              href={`#carouselExampleIndicatorsMyPosts${id}`}
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
              href={`#carouselExampleIndicatorsMyPosts${id}`}
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
        <img src={post.postData.images[0]} alt="image" />
      )}
      <div className="card-body">
        <h1 className="card-title">
          {post ? post.postData.title : "Loading.."}
        </h1>
        <p className="card-text">
          {post
            ? post.postData.description.substring(0, 100) + "..."
            : "Loading.."}
        </p>
        <hr />
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <h5>
            <strong>Likes:</strong> {post.postData.likes}
          </h5>
          <p className="bg-primary py-1 px-3 text-white text-capitalize">
            {post.postData.category}
          </p>
        </div>
        <div className="col-md-12 d-flex align-items-center justify-content-between">
          <button
            className="btn btn-primary"
            onClick={() =>
              history.push({
                pathname: `/dashboard/${
                  !userProfileData.data.ngo
                    ? userProfileData.data.firstName +
                      " " +
                      userProfileData.data.secondName
                    : userProfileData.data.organizationName
                }/${post.postData.title}`,
                state: { id: post.postId },
              })
            }
          >
            <i className="fas fa-eye"> </i> See Post
          </button>
          <div className="ReactionButtonMobile">
            {userProfileData.data.uid === userId ? (
              <button
                className="btn btn-outline-success mx-1"
                onClick={() =>
                  history.push(`/dashboard/myPosts/${post.postId}/edit`)
                }
              >
                <i className="fa fa-pencil"></i> Edit Post
              </button>
            ) : (
              <>
                <button
                  className="btn btn-outline-success mx-1"
                  onClick={() =>
                    toast.dark(`This feature will come in upcoming updates!`)
                  }
                >
                  <i className="fa fa-heart"></i> Interested
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    toast.dark(`This feature will come in upcoming updates!`)
                  }
                >
                  <i className="fa fa-exclamation-triangle"></i> Report Post
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPostCard;
