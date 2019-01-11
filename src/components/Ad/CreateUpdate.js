import React, {Component} from 'react'
import AdForm from "./AdForm";
import Header from "../Header/Header"

import {connect} from 'react-redux';
import {fetchAd} from "./ad-actions";
import {fetchAdCategories} from "../../common/ad-category-actions";
import {fetchAdCertifications} from "../../common/ad-certification-actions";

const mapStateToProps = (state, ownProps) => {
    return {
        ad_id: ownProps.match.params.id,
        ad: state.ad,
        ad_categories: state.ad_categories,
        ad_certifications: state.ad_certifications
    };
};

const mapDispatchToProps = {
    fetchAd,
    fetchAdCategories,
    fetchAdCertifications,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class CreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.props.fetchAdCategories();
        this.props.fetchAdCertifications();
        this.props.fetchAd(this.props.ad_id);
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
                    {this.props.ad.item && <AdForm ad={this.props.ad.item} ad_categories={this.props.ad_categories}
                                                   ad_certifications={this.props.ad_certifications}/>}
                </div>
            </React.Fragment>
        );
    }
});