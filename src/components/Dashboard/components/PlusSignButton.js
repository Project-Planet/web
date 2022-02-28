import React, { useState } from "react";
import { useHistory } from "react-router";
import "../../Styles/PlusSignButton.css";

const PlusSignButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  return (
    <div className="position-fixed plusSignDiv">
      {isOpen && (
        <div className="d-flex flex-column">
          <i
            className="fa bg-success my-1 text-white shadow fa-pencil"
            title="Add Post"
            onClick={() => history.push("/dashboard/addPost")}
          ></i>
          <i
            className="fa bg-dark my-1 text-white shadow fa-image"
            title="My Posts"
            onClick={() => history.push("/dashboard/myPosts")}
          ></i>
          <i
            className="fa bg-secondary my-1 text-white shadow fa-cog"
            title="advanced Settings"
          ></i>
        </div>
      )}
      <i
        className="fas fa-plus bg-primary my-1 text-white shadow"
        onClick={() => setIsOpen(!isOpen)}
      ></i>
    </div>
  );
};

export default PlusSignButton;
