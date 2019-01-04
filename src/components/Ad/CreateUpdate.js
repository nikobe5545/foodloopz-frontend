import React, {Component} from 'react'
import AdForm from "./AdForm";
import Header from "../Header/Header"

import {connect} from 'react-redux';
import {sendMessageToMainEndpoint} from "../../actions/websocketActions";
import {AdActions} from "./ad-reducer";

const mapStateToProps = (state, ownProps) => {
    return {
        adState: {
            ad: state.ad,
            adId: ownProps.match.params.id
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAd: (payload) => {
            dispatch(sendMessageToMainEndpoint(AdActions.FETCH_AD, payload));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class CreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.props.fetchAd({
            adId: this.props.adState.adId
        });
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="container bg-light w-auto px-md-3 py-md-3">
                    {this.props.adState.ad.isFetching &&
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                    {this.props.adState.ad.item && <AdForm ad={this.props.adState.ad.item}/>}
                </div>
            </React.Fragment>
        );
    }
});