import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getPosts } from "../../../redux/actionCreaters";
import fire from "../../APIS/firebase";

import "../../Styles/Post.css";


const Post = ({ post, id, userId, userDocId, userDetails, getPosts }) => {
  const history = useHistory();
  let title, description, fullName, profile, designation, img;
  const liked = post.post.likedBy.filter((like) =>
    like === userId ? like : null
  );
  if (post) {
    title = post.post.title;
    description = post.post.description.slice(0, 41) + "...";
    fullName = !post.postedByData.data.ngo
      ? post.postedByData.data.firstName
        ? post.postedByData.data.firstName +
        " " +
        post.postedByData.data.secondName
        : "Un Named"
      : post.postedByData.data.organizationName
        ? post.postedByData.data.organizationName
        : "Un Named";

    profile = post.postedByData.data.profilePic;
    designation = post.postedByData.data.joinedAs;
    img = post.post.images;
  }


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
    <div
      className="card col-md-12 post py-4 px-4 my-4"
      key={id}
      style={{
        backgroundColor: "hsla(165, 40%, 98%, 0.582)",
        boxShadow: "0px 0px 2px rgba(37, 115, 126, 0.3)",
        borderRadius: "12px",
      }}
    >
      {img && img.length > 1 ? (
        <>
          <div
            id={`carouselExampleIndicators${id}`}
            className="carousel slide card-img-top"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target={`#carouselExampleIndicators${id}`}
                data-slide-to="0"
                className="active"
              ></li>
              {img.slice(1, img.length).map((image, i) => (
                <li
                  data-target={`#carouselExampleIndicators${id}`}
                  data-slide-to={i + 1}
                  key={i}
                ></li>
              ))}
            </ol>
            <div
              className="carousel-inner"
              style={{
                borderRadius: "12px",
              }}
            >
              <div className="carousel-item active">
                <img
                  src={img[0]}
                  className="d-block w-100 card-img-top card-img-top"
                  alt={`image ${1}`}
                />
              </div>
              {img.slice(1, img.length).map((image, i) => (
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
              href={`#carouselExampleIndicators${id}`}
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
              href={`#carouselExampleIndicators${id}`}
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
        <img src={img[0]} className="card-img-top" alt="image" />
      )}
      <div
        className="card-body"
        style={{ cursor: "pointer" }}
        onClick={() =>
          history.push({
            pathname: `/dashboard/${fullName}/${title}`,
            state: { id: post.postId },
          })
        }
      >
        <div className="profile">
          <div className="profile-pic ml-2">
            {profile ? (
              <img src={profile} alt={"profile"} />
            ) : (
              <p>
                {fullName.split(" ")[0].charAt(0)}
                {fullName.split(" ")[1].charAt(0)}
              </p>
            )}
          </div>

          <div className="info ml-3">
            <p
              className="m-0"
              style={{
                color: "#5995fd",
                fontWeight: "300",
                lineHeight: "1.5rem",
                fontSize: "1.3rem",
                fontFamily: "Fredoka One, cursive",
              }}
            >
              {fullName}
            </p>

            <p
              className="text-left mb-3"
              style={{
                color: "#5995fdc0",
                fontWeight: "300",
                lineHeight: "1rem",
                fontSize: "1rem",
                fontFamily: "Fredoka One, cursive",
              }}
            >
              {designation}
            </p>
          </div>
          <p
            className="my-auto mx-auto"
            style={{
              position: "relative",
              right: "-12%",
            }}
          >
            <small className="text-muted ">Last updated 3 mins ago</small>
          </p>
        </div>
        <h5
          className="card-title"
          style={{
            color: "#252525",
            fontWeight: "400",
            lineHeight: "1.5rem",
            fontSize: "1.3rem",
            fontFamily: "Fredoka One, cursive",
          }}
        >
          {title}
        </h5>
        <p
          className="card-text"
          style={{
            fontFamily: "'Rubik', sans-serif",
            color: "#9c9c9c",
            fontSize: "1.1rem",
            lineHeight: "24px",
            fontWeight: "500",
          }}
        >
          {description}
        </p>

        <hr />
      </div>

      <div className="footer-card pb-3 px-2 d-flex align-items-center justify-content-between px-3">
        <button
          className={`like-icon d-flex align-items-center btn ${
            liked.length > 0 ? "btn-dark" : null
          }`}
          onClick={() => likePost()}
        >
          <i
            className={`fas fa-thumbs-up ${
              liked.length > 0 ? "text-white" : "text-dark"
            }`}
          >
            &nbsp;{" "}
          </i>{" "}
          Like {post.post.likes}
        </button>
        <div className="btns Post__btns__mobile">
          {userId === post.post.postedBy ? (
            <Link
              to={`/dashboard/myPosts/${post.postId}/edit`}
              className="btn btn-outline-primary mx-2 btn-sm"
            >
              <i className="fa fa-pencil"></i> Edit Post
            </Link>
          ) : (
            <>
              <button
                type="button"
                className="btn userProBtn2 mx-2 btn-sm"
                style={{ fontSize: "1rem" }}
              >
                <i className="fa fa-heart"></i>
                {"  "} Interested
              </button>
              <button
                type="button"
                onClick={() =>
                  toast.info("This feature will come in next updates!")
                }
                className="btn userProBtn1 btn-sm"
                style={{ fontSize: "1rem" }}
              >
                <i className="fas fa-exclamation-triangle"></i>
                {"  "}Report Post
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => {
    dispatch(getPosts());
  },
});
export default connect(null, mapDispatchToProps)(Post);
