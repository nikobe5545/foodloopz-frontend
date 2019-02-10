import React from 'react';
import $ from 'jquery';

class ImageUploadWidget extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    generateSignature = (callback, parameters) => {
        $.ajax({
            url: '/marketplace/api/rest/cloudinary/get-signature',
            type: 'GET',
            dataType: '',
            data: parameters,
            complete: () => console.log("complete"),
            success: (signature, textStatus, xhr) => callback(signature),
            error: (xhr, status, error) => console.log(xhr, status, error)
        });
    };

    resultCallback = (error, result) => {
        console.log('Cloudinary result', error, result);
        if (result.event === 'success') {
            this.props.callback(result.info.public_id);
        }
    };

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="form-group">
                <button id="upload_widget" className="cloudinary-button btn btn-success" onClick={(event) => {
                    event.preventDefault();
                    window.cloudinary.openUploadWidget({
                        cloudName: 'dpdy0n2qi',
                        apiKey: '374716178173586',
                        cropping: true,
                        uploadSignature: this.generateSignature,
                        uploadPreset: 'foodloopz-loop-image',
                        croppingAspectRatio: 5 / 4,
                        maxFileSize: 4000000,
                        minImageWidth: 500,
                        minImageHeight: 400
                    }, this.resultCallback);
                }}>Ladda upp bild
                </button>
            </div>
        );
    }
};

export default ImageUploadWidget;