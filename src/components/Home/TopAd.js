import React from 'react';
import {Link} from "react-router-dom";

const TopAd = ({topAd}) => {
    console.log('TopAd', topAd);
    return (
        <div className="card bg-light">
            <div className="card-body">
                <h5 className="card-title">{topAd.product}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{topAd.organization.name}</h6>
                <p className="card-text">{topAd.text}</p>
                <Link to={`/ad/view/${topAd.id}`} className="card-link">
                    View ad
                </Link>
                <Link to={`/ad/edit/${topAd.id}`} className="card-link">
                    Edit ad
                </Link>
            </div>
        </div>
    );
};

export default TopAd;