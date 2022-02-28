import React from 'react'
import "../css/Header.css"

function Header() {
    return (
        <div className="container-fluid aboutSec" style={{
            backgroundImage: "url(/img/aboutService/1.svg)",
            backgroundRepeat: "no-repeat",
            width: "100%",
            position: "relative",
            top: "10%",
        }}>
            <div className="row">
                <div className="col-md-6 about-img">
                    <img src="img/party.svg" alt="img" />
                </div>
                <div className="col-md-6">
                    <div className="abtContent">
                        <h1>About Us</h1>
                        <hr />
                        <p> Project Planet is a
                         platform where Organisations and Social Works can post their requirements and find collaborators for their requirements.  In this platform, NGOs, and organizations can collaborate with the volunteers and other social workers so that they can work together and help to make our Planet a better place for living.   </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Header
