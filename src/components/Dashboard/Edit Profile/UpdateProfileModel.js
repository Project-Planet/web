import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import fire from "../../APIS/firebase";

const UpdateProfileModel = ({ closeModal, userId, userDocId }) => {
  const [img, setImg] = useState("");
  const [progress, setProgress] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const imgExt = ["png", "jpg", "jpeg"];
    if (!img) {
      return toast.error("Please choose the image first!");
    }
    if (img.size > 5242880) {
      return toast.error("Image must be less than 5mb");
    }
    if (imgExt.indexOf(img.type.split("/")[1]) === -1) {
      return toast.error("Image must be JPG, JPEG OR PNG");
    }
    fire
      .storage()
      .ref(`profiles/${userId}`)
      .put(img)
      .on(
        "state_changed",
        (snapshot) => {
          const prg = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prg);
        },
        (error) => {
          return toast.error(error.message);
        },
        () => {
          fire
            .storage()
            .ref("profiles")
            .child(userId)
            .getDownloadURL()
            .then((url) => {
              fire
                .firestore()
                .collection("users")
                .doc(userDocId)
                .update({
                  profilePic: url,
                })
                .then((image) => {
                  toast.success("image successfully updated!");
                  closeModal(false);
                  history.push("/dashboard/profile");
                });
            });
        }
      );
  };
  return (
    <div
      className="col-md-12 position-fixed fixed-top "
      style={{ zIndex: 100000, height: "100%", background: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog mt-5">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Profile Pic</h5>
            <button
              type="button"
              className="close"
              onClick={() => closeModal(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form encType="multipart/form-data" autocomplete="off" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="pic">Choose Pic</label>
                <input
                  type="file"
                  placeholder="Choose Image"
                  name="pic"
                  className="form-control"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Update Profile Pic
                </button>
              </div>
            </form>
            {progress && <progress value={progress} max="100" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModel;
