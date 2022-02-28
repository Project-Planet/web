import React from "react";
import { toast } from "react-toastify";

const Users = ({ key, name, profile, img, designation }) => {
  return (
    <div key={key} className="card col-md-11 p-0 mb-3 ">
      <p
        className="position-absolute top ml-3 small text-white px-3 py-2"
        style={{ right: 0, top: "5%", backgroundColor: "#5995fd" }}
      >
        {designation}
      </p>
      <img className="card-img-top" src={img} alt={name} />
      <div
        className="profile position-absolute text-white"
        style={{ bottom: "8%", left: "-8%" }}
      >
        <div className="profile-pic ml-5">
          {profile ? (
            <img src={profile} alt={"profile"} />
          ) : (
              <p>
                {name.split(" ")[0].charAt(0)}
                {name.split(" ")[1].charAt(0)}
              </p>
            )}
        </div>
        <div className="info">
          <p className="font-weight-bold" style={{ textShadow: "0px 0px 20px black" }}>{name}</p>
        </div>
      </div>
      {/* <div className="card-body text-center px-0 pb-0">
      </div> */}
      <button
        className="btn btn-block btn-primary w-100 rounded-0"
        type="button"
        onClick={() =>
          toast.info(
            "This feature will come in upcoming updates!"
          )
        }
      >
        Send Request
      </button>
    </div>
  );
};

export default Users;
