import React from 'react';
import ImageUploadWidget from "./ImageUploadWidget";

const AdForm = ({ad = {}}) => {
    return (
        <form>
            <img src={ad.image ? ("https://res.cloudinary.com/dpdy0n2qi/" + ad.image) : ""}
                 className="img-fluid"/>
            <ImageUploadWidget/>
            <div className="form-group">
                <label htmlFor="product">Product name</label>
                <input type="product" className="form-control" id="product" aria-describedby="productHelp"
                       placeholder="Enter product name" value={ad != null ? ad.product : ""}/>
                <small id="productHelp" className="form-text text-muted">
                    The name of the product
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" placeholder="Enter description"
                          value={ad != null ? ad.text : ""}/>
                <small id="productHelp" className="form-text text-muted">
                    Describe the product with as much details as required
                </small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default AdForm;