import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import fire from "../../APIS/firebase";

const EditPost = ({ Posts, postsLoading }) => {
  const { id } = useParams();
  const history = useHistory();

  const currentPost = Posts && Posts.filter((post) => post.postId === id);

  const [title, setTitle] = useState(
    currentPost ? currentPost[0].post.title : ""
  );
  const [description, setDescription] = useState(
    currentPost ? currentPost[0].post.description : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      return toast.warning("Please fill in all fields!");
    }
    if (title.split(" ").length < 2) {
      return toast.warning("Title should be atlest of two words!");
    }
    if (description.length < 100) {
      return toast.warning("Description should be atleast of 100 characters!");
    }
    fire
      .firestore()
      .collection("posts")
      .doc(id)
      .update({
        title,
        description,
      })
      .then((doc) => {
        toast.success("Post Successfully Updated!!");
        return history.push("/dashboard/myPosts");
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };
  return (
    <>
      {!postsLoading && currentPost ? (
        <div className="container edit-post">
          <h1 className="text-center py-3 pb-5 display-4">Edit Post</h1>
          <div className="row">
            <div className="col-md-7 mx-auto p-5 shadow">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder={"Title"}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    value={currentPost[0].post.category}
                    disabled
                  >
                    <option value="">Category</option>
                    <option value="event">Event</option>
                    <option value="volunteer-needed">Volunteer Needed</option>
                    <option value="collaboration-with-ngo">
                      Collaboration With NGO
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group my-3">
                  <button
                    type="submit"
                    className="btn btn-dark btn-block w-100"
                  >
                    Update Post
                  </button>
                  <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="btn btn-danger btn-block w-100"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center display-1 m-auto">No Post Found</h1>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  Posts: state.posts.allPosts,
  postsLoading: state.posts.postsLoading,
  userId: state.auth.userId,
});
export default connect(mapStateToProps, null)(EditPost);
