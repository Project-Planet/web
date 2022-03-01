import React from "react";
import { Link } from "react-router-dom";
import "./combine.css"

import "../../Styles/ProfileLook.css";

const ProfileLook = ({ userData, isLoading }) => {
  return (
    <div
      className="d-flex flex-row "
      style={{
        padding: "10% 8% 10% 8%",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={{
          pathname: `/dashboard/profile/${userData.uid}/${
            !userData.ngo
              ? userData.firstName
                ? userData.firstName + " " + userData.secondName
                : "Un Named"
              : userData.organizationName
              ? userData.organizationName
              : "Un Named"
          }`,
        }}
      >
        <div className="my-auto">
          {!isLoading ? (
            userData.profilePic ? (
              <img
                src={userData.profilePic}
                alt={"profile"}
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  marginLeft: "7%",
                  boxShadow: "0px 0px 2px rgba(37, 115, 126, 0.3)",
                }}
              />
            ) : !userData.ngo ? (
              userData.firstName ? (
                <p>
                  {userData.firstName.charAt(0)}
                  {userData.secondName.charAt(0)}
                </p>
              ) : (
                <p>V</p>
              )
            ) : userData.organizationName ? (
              <p>{userData.organizationName.split(" ")[0].charAt(0)}</p>
            ) : (
              <p>O</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Link>

      {!isLoading ? (
        <div className="profile-data userMail ml-4 my-1">
          <h4
            className=""
            style={{
              color: "#5995fd",
              fontWeight: "300",
              fontSize: "2rem",
              fontFamily: "Fredoka One, cursive",
              margin: "0",
              lineHeight: "2rem",
            }}
          >
            {!userData.ngo
              ? userData.firstName
                ? userData.firstName + " " + userData.secondName
                : "Un Named"
              : userData.organizationName
              ? userData.organizationName
              : "Un Named"}
          </h4>
          {/* <p className=""
            style={{
              color: "#5995fdc0",
              fontWeight: "300",
              fontSize: "1.1rem",
              fontFamily: "Fredoka One, cursive",
              margin: "0",

            }}>
            {userData.joinedAs === "organization" ? "NGO" : userData.joinedAs}
          </p> */}
          <a href={`mailto:${userData.email}`} className="small mt-1">
            {userData.email}
          </a>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ProfileLook;
