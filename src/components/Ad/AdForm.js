import React from 'react';
import ImageUploadWidget from "./ImageUploadWidget";
import {connect} from "react-redux";
import {postAd} from "./ad-actions";

const mapStateToProps = (state, ownProps) => {
    return {
        ad: state.ad.item,
        ad_categories: state.ad_categories,
        ad_certifications: state.ad_certifications
    };
};

const mapDispatchToProps = {
    postAd
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class AdForm extends React.Component {
    constructor(props) {
        super(props);
        console.log('AdForm this.props', this.props);
        this.state = {
            product: props.ad.product,
            text: props.ad.text,
            published_date: props.ad.published_date,
            price: props.ad.price,
            measurement: props.ad.measurement,
            amount_per_unit: props.ad.amount_per_unit,
            quantity: props.ad.quantity,
            total_weight: props.ad.total_weight,
            shipping: props.ad.shipping,
            category: props.ad.category.id,
            organization: props.ad.organization.id,
            certifications: props.ad.certifications || [],
            certificationIds: props.ad.certifications.map(certification => certification.id).concat() || []
        };
        this.handleInputProduct = this.handleInputProduct.bind(this);
        this.handleInputText = this.handleInputText.bind(this);
        this.handleInputPrice = this.handleInputPrice.bind(this);
        this.handleInputMeasurement = this.handleInputMeasurement.bind(this);
        this.handleInputAmountPerUnit = this.handleInputAmountPerUnit.bind(this);
        this.handleInputQuantity = this.handleInputQuantity.bind(this);
        this.handleInputTotalWeight = this.handleInputTotalWeight.bind(this);
        this.handleInputShipping = this.handleInputShipping.bind(this);
        this.handleInputCategory = this.handleInputCategory.bind(this);
        this.handleInputCertifications = this.handleInputCertifications.bind(this);
        this.postForm = this.postForm.bind(this);
    }

    handleInputProduct(event) {
        this.setState({product: event.target.value})
    }

    handleInputText(event) {
        this.setState({text: event.target.value})
    }

    handleInputPrice(event) {
        this.setState({price: event.target.value})
    }

    handleInputMeasurement(event) {
        this.setState({measurement: event.target.value})
    }

    handleInputAmountPerUnit(event) {
        this.setState({amount_per_unit: event.target.value})
    }

    handleInputQuantity(event) {
        this.setState({quantity: event.target.value})
    }

    handleInputTotalWeight(event) {
        this.setState({total_weight: event.target.value})
    }

    handleInputShipping(event) {
        this.setState({shipping: event.target.value})
    }

    handleInputCategory(event) {
        this.setState({category: {id: event.target.value}})
    }

    handleInputCertifications(event) {
        let result = [];
        const options = event.target && event.target.options;
        let opt;

        for (let i = 0, len = options.length; i < len; i++) {
            opt = options[i];

            if (opt.selected) {
                result.push(this.props.ad_certifications.items.find(item => item.id === parseInt(opt.value)));
            }
        }
        this.setState({
            certifications: result,
            certificationIds: result.map(certification => certification.id).concat() || []
        })
    }

    postForm(event) {
        event.preventDefault();
        console.log(this.props.postAd);
        const data = {
            ...this.state,
            id: this.props.ad.id
        };
        delete data['certificationIds'];
        console.log(data);
        this.props.postAd(data);
    }

    render() {
        return (
            <div className="col border p-4 justify-content-center bg-light">
                <form onSubmit={this.postForm}>
                    <img
                        src={this.props.ad.image ? ("https://res.cloudinary.com/dpdy0n2qi/" + this.props.ad.image) : ""}
                        className="img-fluid"/>
                    <ImageUploadWidget/>
                    <div className="form-group">
                        <label htmlFor="product">Produkt</label>
                        <input type="text" className="form-control" id="product" aria-describedby="productHelp"
                               placeholder="Enter product name" onInput={this.handleInputProduct}
                               value={this.state.product}/>
                        <small id="productHelp" className="form-text text-muted">
                            The name of the product
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Beskrivning</label>
                        <textarea className="form-control" id="text" placeholder="Enter description"
                                  onInput={this.handleInputText} value={this.state.text}/>
                        <small id="textHelp" className="form-text text-muted">
                            Describe the product with as much details as required
                        </small>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="category">Kategori</label>
                            <select className="form-control" value={this.state.category}
                                    onInput={this.handleInputCategory}>
                                {this.props.ad_categories.items.map((ad_category, index) => (
                                    <option key={index} value={ad_category.id}>{ad_category.name}</option>
                                ))}
                            </select>
                            <small id="categoryHelp" className="form-text text-muted">
                                Ange kategori
                            </small>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="shipping">Frakt</label>
                            <select className="form-control" value={this.state.shipping}
                                    onInput={this.handleInputShipping}>
                                <option value="INCLUDED">Inkluderad</option>
                                <option value="EXCLUDED">Exkluderad</option>
                                <option value="BY_AGREEMENT">Enligt överenskommelse</option>
                            </select>
                            <small id="shippingHelp" className="form-text text-muted">
                                Ange frakt
                            </small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="price">Pris</label>
                            <input type="text" className="form-control" id="price" placeholder="Price per unit"
                                   onInput={this.handleInputPrice} value={this.state.price}/>
                            <small id="priceHelp" className="form-text text-muted">
                                The price per unit
                            </small>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="measurement">Enhet</label>
                            <select className="form-control" value={this.state.measurement}
                                    onInput={this.handleInputMeasurement}>
                                <option value="KILOGRAM">Kg</option>
                                <option value="LITER">Liter</option>
                            </select>
                            <small id="measurementHelp" className="form-text text-muted">
                                Choose measurement
                            </small>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="amount-per-measurement">Mängd per förpackingsenhet</label>
                            <input type="text" className="form-control" id="amount-per-measurement"
                                   placeholder="Enter description"
                                   onInput={this.handleInputAmountPerUnit} value={this.state.amount_per_unit}/>
                            <small id="amountPerMeasurementHelp" className="form-text text-muted">
                                Ange mängd per förpackningsenhet
                            </small>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="quantity">Kvantitet</label>
                            <input type="text" className="form-control" id="quantity" placeholder="Enter description"
                                   onInput={this.handleInputQuantity} value={this.state.quantity}/>
                            <small id="quantityHelp" className="form-text text-muted">
                                Ange kvantitet
                            </small>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="amount-per-measurement">Total vikt</label>
                            <input type="text" className="form-control" id="amount-per-measurement"
                                   placeholder="Enter total weight"
                                   onInput={this.handleInputTotalWeight} value={this.state.total_weight}/>
                            <small id="amountPerMeasurementHelp" className="form-text text-muted">
                                Ange den totala vikten
                            </small>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="quantity">Certifieringar</label>
                            <select className="form-control" multiple value={this.state.certificationIds}
                                    onInput={this.handleInputCertifications}>
                                {this.props.ad_certifications.items.map((ad_certification, index) => (
                                    <option key={index} value={ad_certification.id}>{ad_certification.name}</option>
                                ))}
                            </select>
                            <small id="quantityHelp" className="form-text text-muted">
                                Ange certifieringar
                            </small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
});