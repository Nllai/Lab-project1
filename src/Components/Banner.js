import React from "react";
import landingpageimg from "./images/landingpageimg.jpg";
import "./Banner.css";

function Banner() {
    return (
        <div>
            <img
                src={landingpageimg}
                alt="landing_page_img"
                className="banner-img"
            />
            <div className="banner-text">
                <div className="text1">Welcome to Healthland Clinic</div>
                <div className="text2">
                    Your one stop clinic for Massage, Chiropractic, RMT and
                    bodywork therapies
                </div>
                <button>GET STARTED</button>
            </div>
        </div>
    );
}

export default Banner;
