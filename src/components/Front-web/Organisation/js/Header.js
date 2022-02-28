import React from "react";
import "../css/Header.css";

function Header() {



  return (
    <div className="volHeader" style={{
      backgroundImage: "url(/img/nature8.svg)",
      backgroundRepeat: "no-repeat",
      width: "100%",
      position: "relative",
      top: "10%",
    }}>
      <div className="row">
        <div className="col-md-6 sec2">
          <h2>Does your Organisation need Some helpful Hands?</h2>
          <hr />
          <br />
          <p>
            If you are unsure of how to find online volunteers for your organization, then look no further.
            Our online volunteering platform can
            connect you to different volunteers with various skill sets.
            You can create Posts for them to sign up and you can approve
            those who are the best suited for your cause.
                    </p>

          <p> Follow these steps and let others help you!</p>
          <br />
        </div>

        <div className="col-md-6 sec1">
          <br />
          <img src="img/VolOrg/3.svg" className="col-lg-12 img1" />
        </div>
      </div>
    </div>


  );
}

export default Header;
