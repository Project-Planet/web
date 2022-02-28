import React from 'react'

function Inspiration() {
    return (
        <div className="container1" style={{
            backgroundImage: "url(/img/nature04.svg)",
            backgroundRepeat: "no-repeat",
            width: "100%",
            position: "relative",
            top: "10%",
        }}>
            <div className="section1">
                <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
                    <h2>Our Inspiration and Motivation</h2>
                    <hr />
                    <br />
                    <p>
                        NGOs and social works are working very dedicatedly to make our planet sustainable but they are not getting that much exposure and frame that they should get. These people are constant form of Inspiration for us and their works are enough to keep us motivated.
                     </p>


                </div>
                <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
                    <br />
                    <img src="img/aboutService/2.svg" className="col-lg-12 img1" />
                </div>
            </div>

            <div className="volOrgCon2 col-md-12 col-sm-12 col-xs-12">
                <div>
                    <h4> We work to serve the Nature and 🌎 is our motivation. </h4>
                </div>
            </div>

            <div className="section1">
                <div className="col-md-6 col-sm-6 col-xs-12">
                    <img src="img/aboutService/3.svg" className="col-lg-12 img2" />
                </div>
                <div className="volOrgCon col-md-6 col-sm-6 col-xs-12">
                    <h2>Challenges we Look to Solve!</h2>
                    <hr />
                    <br />
                    <p>
                        Our main Challenge is the make people aware of importance of sustainability. Ans to face this Challenge to take the help of
                        NGOs and Social Works by providing them enough tools and resources that can help to make our Planet a better place to live.
                    </p>

                </div>
                <br />
            </div>
        </div>

    )
}

export default Inspiration
