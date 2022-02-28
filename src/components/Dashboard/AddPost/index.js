import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import fire from "../../APIS/firebase";
import { getPosts } from "../../../redux/actionCreaters";

const AddPost = ({ userId, getPosts }) => {
  const history = useHistory();

  const [imgNo, setImgNo] = useState(1);
  const [images, setImages] = useState([""]);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const addImgField = () => {
    setImages([...images, ""]);
    setImgNo(imgNo + 1);
  };

  const addImgValue = (e, i) => {
    const updatedImages = [...images];
    updatedImages[i] = e.target.files[0];
    setImages(updatedImages);
  };
  const deleteImg = (i) => {
    const imgs = [...images];
    imgs.splice(i, 1);
    setImgNo(imgNo - 1);
    setImages(imgs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !description) {
      return toast.warning("Please fill in all fields!!");
    } else if (images) {
      let imgs = 0;
      let imgExt = 0;
      images.map((img) => {
        if (img === "" || img === undefined) {
          imgs++;
        } else {
          const imgsExt = ["jpg", "jpeg", "png"];
          if (imgsExt.indexOf(img.type.split("/")[1]) === -1) {
            imgExt++;
          }
        }
      });
      if (imgs > 0) {
        return toast.error("Please fill all images empty fields!!");
      }
      if (imgExt > 0) {
        return toast.error("Please put images of jpg, png and jpeg!!");
      }
    } else if (title.trim().split(" ").length < 1) {
      return toast.warning("Title should be of atleast 2 words!!");
    } else if (description.length < 100) {
      return toast.warning("Description should be of atleast 100 characters");
    }
    const postData = {
      title,
      category,
      description,
      images: [],
      postedBy: userId,
      likes: 0,
      likedBy: [],
      interested: [],
      postedDate: Date.now().toString(),
      updatedDate: Date.now().toString(),
      reportsNo: 0,
      reportedBy: [],
      verified: false,
    };

    //add posts to firebase
    fire
      .firestore()
      .collection("posts")
      .add(postData)
      .then((post) => {
        const postId = post.id;
        const imgUrls = [];
        images.map((img, i) => {
          const ref = fire.storage().ref(`posts/${postId}/${postId}-${i}`);

          fire
            .storage()
            .ref(`posts/${postId}/${postId}-${i}`)
            .put(img)
            .on(
              "state_changed",
              (snapshot) => {
                let progress =
                  Math.round(snapshot.bytesTransferred / snapshot.totalBytes) *
                  100;
                setProgressText(`Uploading Image ${i} - ${progress} % `);
                setProgress(progress);
              },
              (error) => {
                return toast.error(error.message);
              },
              () => {
                ref.getDownloadURL().then((url) => {
                  imgUrls.push(url);
                  fire
                    .firestore()
                    .collection("posts")
                    .doc(postId)
                    .update({
                      images: imgUrls,
                    })
                    .then((doc) => {});
                  if (imgUrls.length === images.length) {
                    toast.success("Post successfully created!");
                    getPosts();
                    return history.push("/dashboard");
                  }
                });
              }
            );
        });
      });
  };
  return (
    <div className="container-fluid">
      <h1 className="text-center display-2 py-3 pb-5">ADD POST</h1>
      <div className="row">
        <div className="col-md-6 mx-auto p-5 border">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-group my-3">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group my-3">
              <select
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Category</option>
                <option value="event">Event</option>
                <option value="volunteer-needed">Volunteer Needed</option>
                <option value="collaboration-with-ngo">
                  Collaboration With NGO
                </option>
              </select>
            </div>
            <div className="form-group my-3">
              <textarea
                className="form-control"
                placeholder="Description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group my-3">
              {images.map((img, i) => (
                <div
                  className="d-flex my-2 flex-grid align-items-center"
                  key={i}
                >
                  <input
                    type="file"
                    className="form-control mr-2"
                    onChange={(e) => addImgValue(e, i)}
                  />
                  {imgNo > 1 && (
                    <i
                      className="fas fa-trash text-danger"
                      onClick={() => deleteImg(i)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                </div>
              ))}
              {imgNo < 5 && (
                <input
                  type="button"
                  value="+ Add more image"
                  className=" my-2 btn btn-primary"
                  onClick={addImgField}
                />
              )}
            </div>
            <div className="form-group my-3">
              <button type="submit" className="btn btn-dark w-100 btn-block">
                Upload Post
              </button>
            </div>
          </form>
          {progress ? (
            <>
              <p>{progressText}</p>
              <progress value={progress} max="100" />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
});
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => {
    dispatch(getPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
