import React from 'react';
import TopAd from "./TopAd";

import {connect} from 'react-redux';
import {sendMessageToMainEndpoint} from "../../actions/websocketActions";
import {Actions} from "./home-reducer";

const mapStateToProps = state => {
    return {
        topAds: state.home.topAds
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTopAds: () => {
            dispatch(sendMessageToMainEndpoint(Actions.FETCH_TOP_ADS, null));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class TopAds extends React.Component {

    constructor(props) {
        super(props);
        if (this.props.topAds.didInvalidate) {
            this.props.fetchTopAds();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.topAds.items.map((topAd, index) => (
                        <TopAd key={index} topAd={topAd}/>
                    ))}
                </div>
            </div>
        );
    }
});