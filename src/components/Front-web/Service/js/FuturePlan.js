import React from "react";
import "./../css/FuturePlan.css"
function FuturePlan() {
  return (
    <div className="container-fluid pt-5 px-5 padding_mobile">
      <h1
        className="text-center py-5"
        style={{
          color: "#5995fd",
          fontWeight: "500",
          fontSize: "3rem",
          fontFamily: "'Fredoka One', cursive",
        }}
      >
        Future Plans!
      </h1>
      <div className="row py-4 px-4">
        <div className="col-md-6 text-center ">
          <h1
            style={{
              fontWeight: "lighter",
              fontSize: "2.5rem",
              fontFamily: "Fredoka One",
            }}
          >
            Next Version
          </h1>
          <div className="row">
            <div className="col-md-10 mx-auto ">
              <div className="cardPath  position-relative px-3 my-5">
                <div
                  className="numberCircle  circle text-white rounded-circle d-flex
                                 align-items-center justify-content-center mx-auto position-relative border border-white"
                >
                  <p>1</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>✅ Event and Post Verification </h4>
                  <p className="font-weight-light my-3">
                    (Task Completed) In this update, all the posts that are
                    posted by any user will first verify by admins. We will also
                    verify the place and climate that will be on the day of the
                    event, if everything is good then we will pass the event or
                    post otherwise post will not be uploaded. If it does not
                    follow the rules.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-10 mx-auto">
              <div className="cardPath  position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>2</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>✅ Interaction with Posts </h4>
                  <p className="font-weight-light my-3">
                    (Partially Completed) In this update, users can interact
                    with other user posts, they can like, report the post, and
                    can press the interested button if they are interested in
                    participating in the thing that is in the post.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-10 mx-auto">
              <div className="cardPath  position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>3</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>✅ User DashBoard and Profile</h4>
                  <p className="font-weight-light my-3">
                    (Task Completed) In this update, users can add more content
                    to their profiles, also, users will have their own Profile
                    Page. They can see requests sent by other users to join with
                    them and users can also send request, start chat, and send
                    email from their profile only.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-10 mx-auto">
              <div className="cardPath position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>4</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>✅ Email Sending Platform</h4>
                  <p className="font-weight-light my-3">
                    (Partially Completed) In this update, we are providing an
                    email sending platform where organizations or volunteers can
                    send mails also to interested peoples from the posts or from
                    their profiles.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-10 mx-auto">
              <div className="cardPath  position-relative px-3 my-5">
                <div
                  className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center 
                                mx-auto position-relative border border-white"
                >
                  <p>5</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>✅ Chatting Platform</h4>
                  <p className="font-weight-light my-3">
                    In this update, we are going to provide a chatting platform
                    where organizations and volunteers can chat there with the
                    posts interested people for better interaction for their
                    project or collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 text-center ">
          <h1
            style={{
              fontWeight: "lighter",
              fontSize: "2.5rem",
              fontFamily: "Fredoka One",
            }}
          >
            Upcoming Versions
          </h1>
          <div className="row mx-auto">
            <div className="col-md-10 mx-auto">
              <div className="cardPath  position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>1</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Generate Certificates</h4>
                  <p className="font-weight-light my-3">
                    In this update if our platform will be verified successfully
                    then we will provide e-certificate generator platform so
                    that any organization can create the certificates and give
                    to the volunteers or collaborators. This will also help to
                    save the paper and trees that is good for climate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-10 mx-auto">
              <div className="cardPath position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>2</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Sponsorship for Organisations</h4>
                  <p className="font-weight-light my-3">
                    In this update we will provide orgnizations sponsers once
                    our platform is Registered.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-10 mx-auto">
              <div className="cardPath  position-relative px-3 my-5">
                <div className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white">
                  <p>3</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Events and Challenges for NGOs</h4>
                  <p className="font-weight-light my-3">
                    We will be adding events and challenges for social workers
                    and make them more interactive and productive by providing
                    them rewards and goodies for active participation in the
                    campaign. We will also use GOOGLE APIs for this purpose. For
                    Example, we can use google API to detect the Tree Density in
                    the area, then the social Community that will grow more
                    trees in less dense are will be awarded.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-10 mx-auto">
              <div className="cardPath  position-relative px-3 my-5">
                <div
                  className="numberCircle  circle text-white rounded-circle d-flex align-items-center justify-content-center 
                                mx-auto position-relative border border-white"
                >
                  <p>4</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Voice and Sign Language Controllable Website</h4>
                  <p className="font-weight-light my-3">
                    In this update, we will make the platform sign language and
                    voice make this platform voice controllable so that any
                    physically handicapped user can also, use this platform by
                    just voice. Also, sign controllable so that anyone who can't
                    speak or listen can also, control this platform with sign
                    Language.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-10 mx-auto">
              <div className="cardPath  position-relative px-3 my-5">
                <div
                  className="numberCircle  circle text-white rounded-circle d-flex
                                 align-items-center justify-content-center mx-auto position-relative border border-white"
                >
                  <p>5</p>
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>And More</h4>
                  <p className="font-weight-light my-3">
                    There are more other good features that will come in some
                    other updates like `Making this website understandable in
                    all languages` and many more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FuturePlan;

