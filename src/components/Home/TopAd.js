import React from 'react';
import {Link} from "react-router-dom";

const TopAd = ({topAd, active}) => {
    console.log('TopAd', topAd);
    return (
        <div className={`login__email ${active}`}>
            <Link to={`/ad/view/${topAd.id}`}>
                <img src={topAd.image ? ("https://res.cloudinary.com/dpdy0n2qi/" + topAd.image) : ""} alt="Blah!"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>{topAd.product}</h5>
                    <p>{topAd.text}</p>
                </div>
            </Link>
        </div>

    );
};

export default TopAd;