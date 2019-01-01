import React from 'react';

const TopAd = ({topAd}) => {
    return (
        <li>
            {topAd.fields.product}
        </li>
    );
};

export default TopAd;