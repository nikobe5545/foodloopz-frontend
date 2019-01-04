import React from 'react';
import ImageUploadWidget from "./ImageUploadWidget";

export default class AdForm extends React.Component {
    constructor(props){
        super(props);
        console.log('AdForm this.props', this.props);
        this.state = {
            product: props.ad ? props.ad.product : null,
            description: props.ad ? props.ad.description : null
        }
        console.log('AdForm this.state', this.state);
    }

    handleInputProduct (event) {
        this.setState({ product: event.target.value })
    }
    handleInputDescription (event) {
        this.setState({ description: event.target.value })
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
                           placeholder="Enter product name" onInput={this.handleInputProduct} value={this.state.product}/>
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
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}