import React from 'react';
import ImageUploadWidget from "./ImageUploadWidget";

export default class AdForm extends React.Component {
    constructor(props) {
        super(props);
        console.log('AdForm this.props', this.props);
        this.state = {
            product: props.ad.product,
            description: props.ad.description,
            published_date: props.ad.published_date,
            price: props.ad.price,
            measurement: props.ad.measurement,
            amount_per_measurement: props.ad.amount_per_measurement,
            quantity: props.ad.quantity,
            total_weight: props.ad.total_weight,
            shipping: props.ad.shipping,
            category: props.ad.category.id,
            organization: props.ad.organization.id,
            certifications: props.ad.certifications || []
        };
        console.log('AdForm this.state', this.state);
    }

    handleInputProduct(event) {
        this.setState({product: event.target.value})
    }
    handleInputDescription(event) {
        this.setState({description: event.target.value})
    }
    handleInputPrice(event) {
        this.setState({price: event.target.value})
    }
    handleInputMeasurement(event) {
        this.setState({measurement: event.target.value})
    }
    handleInputAmountPerMeasurement(event) {
        this.setState({amount_per_measurement: event.target.value})
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
        this.setState({category: event.target.value})
    }
    handleInputCertifications(event) {
        this.setState({certifications: event.target.value})
    }

    render() {
        return (
            <form>
                <img src={this.props.ad.image ? ("https://res.cloudinary.com/dpdy0n2qi/" + this.props.ad.image) : ""}
                     className="img-fluid"/>
                <ImageUploadWidget/>
                <div className="form-group">
                    <label htmlFor="product">Product name</label>
                    <input type="text" className="form-control" id="product" aria-describedby="productHelp"
                           placeholder="Enter product name" onInput={this.handleInputProduct}
                           value={this.state.product}/>
                    <small id="productHelp" className="form-text text-muted">
                        The name of the product
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" placeholder="Enter description"
                              onInput={this.handleInputDescription} value={this.state.description}/>
                    <small id="productHelp" className="form-text text-muted">
                        Describe the product with as much details as required
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Price</label>
                    <input type="text" className="form-control" id="description" placeholder="Price per unit"
                              onInput={this.handleInputPrice} value={this.state.price}/>
                    <small id="productHelp" className="form-text text-muted">
                        The price per unit
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Measurement</label>
                    <input type="text" className="form-control" id="description" placeholder="Measurement"
                              onInput={this.handleInputMeasurement} value={this.state.measurement}/>
                    <small id="productHelp" className="form-text text-muted">
                        Describe the product with as much details as required
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Amount per measurement</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter description"
                              onInput={this.handleInputAmountPerMeasurement} value={this.state.amount_per_measurement}/>
                    <small id="productHelp" className="form-text text-muted">
                        Describe the product with as much details as required
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}