import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import "../../Styles/Profile.css";

const Profile = ({ userId, isLoading, userData }) => {
  const history = useHistory();
  return (
    <div className="container-fluid">
      {!isLoading ? (
        <>
          <div className="row p-5">
            <div className="col-md-2 p-0 profilePic ml-auto mr-5 d-flex flex-column align-items-center justify-content-center">
              {!userData.profilePic ? (
                "Profle Pic"
              ) : (
                <img src={userData.profilePic} alt="profile pic" />
              )}
            </div>
            <div className="col-md-6 mr-5">
              <h1 className="display-3">
                {!userData.ngo
                  ? userData.firstName || userData.secondName
                    ? userData.firstName + " " + userData.secondName
                    : "Un-named"
                  : userData.organizationName
                  ? userData.organizationName
                  : "Un-named"}
              </h1>
              <a
                href={`mailto:${userData.email && userData.email}`}
                className="pl-0"
              >
                {userData.email}
              </a>
              <p className="bg-dark p-1 col-md-2 text-white text-center mt-4">
                {userData.joinedAs}
              </p>
            </div>
          </div>
          <div className="row d-flex flex-column">
            {!userData.ngo ? (
              <>
                <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto pt-5 px-5">
                  <h3>First Name</h3>
                  <input
                    type="text"
                    value={userData.firstName ? userData.firstName : "Un-Named"}
                    className="input-field"
                    disabled
                  />
                </div>
                <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
                  <h3>Last Name</h3>
                  <input
                    type="text"
                    value={
                      userData.secondName ? userData.secondName : "Un-Named"
                    }
                    className="input-field"
                    disabled
                  />
                </div>
              </>
            ) : (
              <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
                <h3>Organization Name</h3>
                <input
                  type="text"
                  value={
                    userData.organizationName
                      ? userData.organizationName
                      : "Un-Named"
                  }
                  className="input-field"
                  disabled
                />
              </div>
            )}
            <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
              <h3>Phone Number</h3>
              <input
                type="text"
                value={
                  userData.phoneNumber ? userData.phoneNumber : "No Number"
                }
                className="input-field"
                disabled
              />
            </div>
            <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
              <h3>Landline Number</h3>
              <input
                type="text"
                value={
                  userData.landline ? userData.landline : "No Number (optional)"
                }
                className="input-field"
                disabled
              />
            </div>
            <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
              <h3>State</h3>
              <input
                type="text"
                value={userData.state ? userData.state : "Add State"}
                className="input-field"
                disabled
              />
            </div>
            <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
              <h3>Zip Code</h3>
              <input
                type="text"
                value={userData.zipcode ? userData.zipcode : "Add Zipcode"}
                className="input-field"
                disabled
              />
            </div>
            <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
              <h3>Address</h3>
              <textarea
                type="text"
                value={userData.address ? userData.address : "Add Add Address"}
                rows={5}
                style={{ borderRadius: 0, resize: "none" }}
                className="input-field"
                disabled
              ></textarea>
            </div>
            <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
              <h3>City</h3>
              <input
                type="text"
                value={userData.city ? userData.city : "Add City"}
                className="input-field"
                disabled
              />
            </div>
            <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5">
              <h3>Country</h3>
              <input
                type="text"
                value={userData.country ? userData.country : "Add Country"}
                className="input-field"
                disabled
              />
            </div>
            <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5 my-5">
              <button
                type="button"
                onClick={() => history.push("/dashboard/profile/edit")}
                className="btn btn-primary"
              >
                Edit Profile
              </button>
              <button type="button" className="btn btn-danger">
                Delete Account
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.userDetail.isLoading,
  userData: state.userDetail.userDetails,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, null)(Profile);
