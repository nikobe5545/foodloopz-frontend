import $ from "jquery";

export const AdActions = {
    FETCH_AD: 'FETCH_AD',
    FETCH_AD_SUCCESS: 'FETCH_AD_SUCCESS',
    FETCH_AD_FAIL: 'FETCH_AD_FAIL'
};

export function fetchAd(id) {
    return (dispatch, getStore) => {
        console.log('Fetch ad with id ' + id)
        dispatch(requestTopAds());
        $.ajax({
            url: '/marketplace/api/rest/ads/' + id,
            type: 'GET',
            dataType: 'json'
        })
        .done((response) => {
            console.log('Ad fetch success', response);
            dispatch({
                    type: AdActions.FETCH_AD_SUCCESS,
                    data: response
                }
            );
        })
        .fail((xhr, status, error) => {
            dispatch(fetchTopAdsError('Fetching ad failed', error));
        })
    };
}

function fetchTopAdsError(errorMessage, error) {
    return {
        type: AdActions.FETCH_AD_FAIL,
        errorMessage,
        error
    }
}

function requestTopAds() {
    return {type: AdActions.FETCH_AD}
}
