import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";

import "../../Styles/Profile.css";
import fire from "../../APIS/firebase";
import { toast } from "react-toastify";
import UpdateProfileModel from "./UpdateProfileModel";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import "./index.css";

const EditProfile = ({ userId, userData, isLoading, userDocId }) => {
  // input states
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [landlineNumber, setLandlineNumber] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // modal box
  const [openModel, setOpenModel] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (userData) {
      if (userData.firstName) {
        setFirstName(userData.firstName ? userData.firstName : "");
        setSecondName(userData.secondName ? userData.secondName : "");
      }
      if (userData.organizationName) {
        setOrganizationName(
          userData.organizationName ? userData.organizationName : ""
        );
      }
      setPhoneNumber(userData.phoneNumber ? userData.phoneNumber : "");
      setLandlineNumber(userData.landline ? userData.landline : "");
      setState(userData.state ? userData.state : "");
      setZipCode(userData.zipCode ? userData.zipCode : "");
      setAddress(userData.address ? userData.address : "");
      setCity(userData.city ? userData.city : "");
      setCountry(userData.country ? userData.country : "");
    }
  }, [userData]);

  // update profile function
  const updateProfile = () => {
    if (!userData.ngo) {
      if (!firstName) {
        return toast.error("First name is mandatory to update");
      }
      fire
        .firestore()
        .collection("users")
        .doc(userDocId)
        .update({
          address: address,
          city: city,
          country: country,
          daysForWork: [],
          email: userData.email,
          firstName: firstName,
          joinedAs: userData.joinedAs,
          landline: "",
          ngo: userData.joinedAs === "organization",
          ngoType: "",
          phoneNumber: phoneNumber,
          zipcode: zipCode,
          secondName: secondName,
          state: state,
          uid: userId,
          profilePic: userData.profilePic ? userData.profilePic : "",
        });
    } else {
      if (!organizationName) {
        return toast.error("Organization name is mandatory to update");
      }
      fire
        .firestore()
        .collection("users")
        .doc(userDocId)
        .update({
          address: address,
          city: city,
          country: country,
          daysForWork: [],
          email: userData.email,
          organizationName: organizationName,
          joinedAs: userData.joinedAs,
          landline: "",
          ngo: userData.joinedAs === "organization",
          ngoType: userData.ngoType,
          phoneNumber: phoneNumber,
          zipcode: zipCode,
          state: state,
          uid: userId,
          profilePic: userData.profilePic ? userData.profilePic : "",
        });
    }

    toast.success("Updated Successfully!");
    history.push("/dashboard");
  };

  return (
    <>
      {openModel && (
        <UpdateProfileModel
          closeModal={setOpenModel}
          userId={userId}
          userDocId={userDocId}
        />
      )}
      <div
        className="container-fluid edit_profile_container"
        style={{
          backgroundImage: "url(/img/aboutService/1.svg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f6f6f6",
          width: "100%",
          position: "relative",
          top: "10%",
        }}
      >
        {!isLoading ? (
          <>
            <div className="row p-5">
              <div
                className="col-md-2 profilePic ml-auto mr-5 d-flex flex-column align-items-center p-0 justify-content-center"
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                  boxShadow: "0px 0px 7px rgba(37, 115, 126, 0.3)",
                  // border: "3px solid #ff9900",
                  backgroundColor: "tranparent",
                }}
              >
                {!userData.profilePic ? (
                  <AccountBoxIcon
                    style={{
                      transform: "scale(4)",
                      marginBottom: "12%",
                    }}
                  />
                ) : (
                  <img src={userData.profilePic} alt="profile pic" />
                )}
                <button
                  className="change-profile-pic d-flex align-items-center justify-content-center"
                  onClick={() => setOpenModel(true)}
                >
                  <i className="fas fa-camera"></i>
                  <p className="ml-2 mt-3">
                    <strong>Change Pic</strong>
                  </p>
                </button>
              </div>
              <div className="col-md-6 mr-5">
                <h1
                  className="display-2"
                  style={{
                    color: "#5995fd",
                    fontWeight: "300",
                    fontSize: "3rem",
                    fontFamily: "Fredoka One, cursive",
                    marginTop: "7%",
                    lineHeight: "2rem",
                  }}
                >
                  {!userData.ngo
                    ? userData.firstName && userData.secondName
                      ? userData.firstName + " " + userData.secondName
                      : "Un Named"
                    : userData.organizationName
                    ? userData.organizationName
                    : "Un Named"}
                </h1>
                <a
                  href={`mailto:${userData.email && userData.email}`}
                  className="pl-0 text-dark"
                >
                  {userData.email}
                </a>

                <p className="bg-warning text-dark p-1 col-md-2 text-center mt-4 text-capitalize font-weight-bold rounded">
                  {userData.joinedAs}
                </p>
              </div>
            </div>

            <div className="row d-flex flex-column edit_profile">
              {!userData.ngo ? (
                <>
                  <div className="row text-center d-flex mx-auto">
                    <h3 className="input_title col-md-12 ">First Name</h3>
                    <input
                      autocomplete="off"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input-field  rounded-0 border-0 col-md-12"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="row text-center d-flex mx-auto">
                    <h3 className="input_title col-md-12 ">Last Name</h3>
                    <input
                      autocomplete="off"
                      type="text"
                      value={secondName}
                      onChange={(e) => setSecondName(e.target.value)}
                      className="input-field  rounded-0 border-0 col-md-12"
                      placeholder="Enter last name"
                    />
                  </div>
                </>
              ) : (
                <div className="row text-center mx-auto my-3">
                  <h3 className="input_title col-md-12 ">Organization Name</h3>
                  <input
                    autocomplete="off"
                    type="text"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    className="input-field rounded-0 border-0 col-md-12"
                    placeholder="Enter organization name"
                  />
                </div>
              )}
              <div className="row text-center   mx-auto">
                <h3 className="input_title col-md-12 ">Phone Number</h3>
                <input
                  autocomplete="off"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input-field  rounded-0 border-0 col-md-12"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="row text-center d-flex  mx-auto">
                <h3 className="input_title col-md-12  ">Landline Number</h3>
                <input
                  autocomplete="off"
                  type="text"
                  value={landlineNumber}
                  onChange={(e) => setLandlineNumber(e.target.value)}
                  className="input-field  rounded-0 border-0 col-md-12"
                  placeholder="Enter Landline Number"
                />
              </div>
              <div className="row text-center d-flex mx-auto">
                <h3 className="input_title col-md-12 ">State</h3>
                <input
                  autocomplete="off"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="input-field  rounded-0 border-0 col-md-12"
                  placeholder="Enter state"
                />
              </div>

              <div className="row text-center d-flex align-items-center mx-auto">
                <h3 className="input_title col-md-12 ">Zip Code</h3>
                <input
                  autocomplete="off"
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="input-field  rounded-0 border-0 col-md-12 "
                  placeholder="Enter zipcode"
                />
              </div>
              <div className="row text-center d-flex align-items-center mx-auto">
                <h3 className="input_title col-md-12 ">Address Line 1</h3>
                <input
                  autocomplete="off"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={5}
                  style={{ borderRadius: 0, resize: "none" }}
                  className="input-field  rounded-0 border-0 col-md-12"
                  placeholder="Eg. House no. 11/2, Block 6, near railway..."
                />
              </div>
              <div className="row text-center d-flex align-items-center mx-auto">
                <h3 className="input_title col-md-12">City</h3>
                <input
                  autocomplete="off"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input-field  rounded-0 border-0 col-md-12"
                  placeholder="Enter City"
                />
              </div>
              <div className="row text-center d-flex align-items-center mx-auto">
                <h3 className="input_title col-md-12">Country</h3>
                <input
                  autocomplete="off"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="input-field  rounded-0 border-0 col-md-12"
                  placeholder="Enter Country"
                />
              </div>
              <div className="col-md-6 text-center d-flex align-items-center justify-content-between mx-auto px-5 my-5">
                <button
                  type="submit"
                  onClick={updateProfile}
                  className="btn userProBtn2 "
                  style={{ fontSize: "1.1rem" }}
                >
                  Update Profile
                </button>
                <button
                  type="button"
                  onClick={() => history.goBack()}
                  className="btn userProBtn1"
                  style={{ fontSize: "1.1rem" }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.userDetail.isLoading,
  userData: state.userDetail.userDetails,
  userDocId: state.userDetail.userDocId,
  userId: state.auth.userId,
});

export default connect(mapStateToProps, null)(EditProfile);
