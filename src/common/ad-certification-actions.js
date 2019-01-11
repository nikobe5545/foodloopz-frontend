import $ from "jquery";

export const AdCertificationActions = {
    FETCH_AD_CERTIFICATIONS: 'FETCH_AD_CERTIFICATIONS',
    FETCH_AD_CERTIFICATIONS_SUCCESS: 'FETCH_AD_CERTIFICATIONS_SUCCESS',
    FETCH_AD_CERTIFICATIONS_FAIL: 'FETCH_AD_CERTIFICATIONS_FAIL'
};

export function fetchAdCertifications() {
    return (dispatch, getStore) => {
        console.log('Fetch ad categories')
        dispatch(requestAdCertifications());
        $.ajax({
            url: '/marketplace/api/rest/ad-certifications',
            type: 'GET',
            dataType: 'json'
        })
            .done((response) => {
                console.log('Fetch ad categories success', response);
                dispatch({
                        type: AdCertificationActions.FETCH_AD_CERTIFICATIONS_SUCCESS,
                        data: response
                    }
                );
            })
            .fail((xhr, status, error) => {
                dispatch(fetchAdCategoriesError('Fetching ad categories failed', error));
            })
    };
}

function fetchAdCategoriesError(errorMessage, error) {
    return {
        type: AdCertificationActions.FETCH_AD_CERTIFICATIONS_FAIL,
        errorMessage,
        error
    }
}

function requestAdCertifications() {
    return {type: AdCertificationActions.FETCH_AD_CERTIFICATIONS}
}