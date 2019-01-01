import React from 'react';
import TopAd from "./TopAd";

const TopAds = ({topAds, fetchTopAds}) => {
    if (topAds.didInvalidate) {
        fetchTopAds();
    }
    return (
        <ul>
            {topAds.items.map((topAd, index) => (
                <TopAd key={index} topAd={topAd}/>
            ))}
        </ul>
    )
};

export default TopAds;