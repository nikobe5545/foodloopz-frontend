import React, {Component} from 'react'
import AdForm from "./AdForm";
import Header from "../Header/Header"

import {connect} from 'react-redux';
import {AdActions} from "./ad-reducer";
import {fetchAd} from "./ad-actions";

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.match.params.id,
        ad: state.ad
    };
};

const mapDispatchToProps = {
    fetchAd
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class CreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.props.fetchAd(this.props.id);
    }

    render() {
        console.log("this.props.ad.item", this.props.ad.item)
        return (
            <React.Fragment>
                <Header/>
                <div className="container bg-light w-auto px-md-3 py-md-3">
                    {this.props.ad.isFetching &&
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                    {this.props.ad.item && <AdForm ad={this.props.ad.item}/>}
                </div>
            </React.Fragment>
        );
    }
});