import React from 'react'
import Navigation from "../Navigation";
import Footer from "../Footer";
import Header from './js/Header';
import Works from './js/Works';
import FuturePlan from './js/FuturePlan';

function Service({ isAuthenticated, logoutUser }) {
    return (
        <div>
            <Navigation isAuthenticated={isAuthenticated} logoutUser={logoutUser} />
            <Header />
            <Works />
            <FuturePlan />
            <Footer />
        </div>
    )
}

export default Service
