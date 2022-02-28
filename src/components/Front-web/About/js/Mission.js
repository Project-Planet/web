import React from 'react';
import "../css/Mission.css"
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import FlagIcon from '@material-ui/icons/Flag';


function Mission() {
    return (

        <div className="container missionSec #services">
            <div className="section-header">
                <h2>Our Mission and Vission</h2>
                <p>
                    As we know that there are many organizations that are working to solve the problems that are in the way of making our planet sustainable. But these organizations are not getting so much attention and not even any platform.
                </p>
            </div>

            <div className="row">


                {/* <div className="col-container"> */}
                    <div className="col-lg-6 col">
                        <div className="box" >
                            <div className="icon">

                                <TrackChangesIcon />

                            </div>
                            <h4 className="title">
                                <h4>Our Mission</h4>
                            </h4>
                            <p className="description">
                                We work work with the mission that we have to provide a proper support
                                to these
                                Organizations and NGOs.
                                So that they can fulfill their needs and can collaborate with
                                other volunteers and organizations.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col">
                        <div className="box">
                            <div className="icon">

                                <FlagIcon />

                            </div>
                            <h4 className="title">
                                <h4>Our Vision </h4>
                            </h4>
                            <p className="description">
                                Our vision is to promote each and every person who can work for the sustainability
                                of our Planet. We will be providing them enough tools and resources to make their workflow
                                smooth, from planning of event to Conducting a event.
                            </p>
                        </div>
                    </div>

                {/* </div> */}
            </div>
        </div>
    )
}

export default Mission
