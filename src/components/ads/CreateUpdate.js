import React from 'react';
import AdForm from "./AdForm";

const CreateUpdate = ({adState, fetchAd}) => {
    if (adState.ad.didInvalidate && adState.adId) {
        fetchAd({
            adId: adState.adId
        });
    }
    return (
        <div>
            {adState.ad.isFetching &&
            <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>}
            {adState.ad.item && <AdForm ad={adState.ad.item}/>}
        </div>
    );
};

export default CreateUpdate;