import React from 'react';
import TopAd from "./TopAd";

const TopAds = ({topAdsState, fetchTopAds}) => {
    if (topAdsState.didInvalidate) {
        fetchTopAds();
    }
    return (
        <div className="container">
            <div className="row">
                {topAdsState.items.map((topAd, index) => (
                    <TopAd key={index} topAd={topAd}/>
                ))}
            </div>
        </div>
    )
};

export default TopAds;