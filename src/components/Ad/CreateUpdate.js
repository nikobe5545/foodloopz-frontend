import React, {Component} from 'react'
import AdForm from "./AdForm";
import Header from "../Header/Header"

import {connect} from 'react-redux';
import {fetchAd, postAd} from "./ad-actions";
import {fetchAdCategories} from "../../common/ad-category-actions";
import {fetchAdCertifications} from "../../common/ad-certification-actions";
import BreadcrumbArea from "../Header/BreadcrumbArea";

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
    postAd
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
                <BreadcrumbArea heading="Skapa en loop" text="Sälj ditt överskott idag"/>
                <div className="container-fluid pl-0 pr-0 bg-white w-75 px-md-3 py-md-3">
                    {this.props.ad.isFetching &&
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                    <div className="row">
                        {this.props.ad.item && <AdForm/>}
                    </div>
                </div>
            </React.Fragment>
        );
    }
});