import $ from "jquery";
import {addCSRFHeader} from "../../utils/rest";

export const AdActions = {
    FETCH_AD: 'FETCH_AD',
    FETCH_AD_SUCCESS: 'FETCH_AD_SUCCESS',
    FETCH_AD_FAIL: 'FETCH_AD_FAIL',
    POST_AD: 'POST_AD',
    POST_AD_SUCCESS: 'POST_AD_SUCCESS',
    POST_AD_FAIL: 'POST_AD_FAIL'
};

export function fetchAd(id) {
    return (dispatch, getStore) => {
        console.log('Fetch ad with id ' + id)
        dispatch(requestAd());
        $.ajax({
            url: '/marketplace/api/rest/loops/' + id,
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
            dispatch(fetchAdError('Fetching ad failed', error));
        })
    };
}

function fetchAdError(errorMessage, error) {
    return {
        type: AdActions.FETCH_AD_FAIL,
        errorMessage,
        error
    }
}

function requestAd() {
    return {type: AdActions.FETCH_AD}
}


export function postAd(data) {
    return (dispatch, getStore) => {
        console.log('Post ad', data);
        dispatch(requestPostAd(data));
        $.ajax({
            url: '/marketplace/api/rest/loops/' + data.id + '/',
            type: 'POST',
            dataType: 'json',
            data
        })
            .done((response) => {
                console.log('Post ad success', response);
                dispatch({
                        type: AdActions.FETCH_AD_SUCCESS,
                        data: response
                    }
                );
            })
            .fail((xhr, status, error) => {
                dispatch(postAdError('Posting ad failed', error));
            })
    };
}

function requestPostAd(data) {
    return {
        type: AdActions.POST_AD,
        data
    }
}

function postAdError(errorMessage, error) {
    return {
        type: AdActions.POST_AD_FAIL,
        errorMessage,
        error
    }
}