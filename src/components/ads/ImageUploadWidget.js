import React from 'react';
import $ from 'jquery';

class ImageUploadWidget extends React.Component {
    state = {
        newImageId: null
    };

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
        /**
         * result: {
         *     event: 'success',
         *     info: {
         *         bytes: 809291 ,
         *         created_at: "2019-01-02T08:06:13Z" ,
         *         etag: "fd8be057c861556373ac5596096bffd5" ,
         *         format: "jpg" ,
         *         height: 1080 ,
         *         original_filename: "slav_batman",
         *          path: "v1546416373/jdkd04yiic0hmy1plund.jpg",
         *          placeholder: false ,
         *         public_id: "jdkd04yiic0hmy1plund",
         *          resource_type: "image" ,
         *         secure_url: "https://res.cloudinary.com/dpdy0n2qi/image/upload/v1546416373/jdkd04yiic0hmy1plund.jpg" ,
         *         signature: "d924a1cf8138194949ae1e653d2cd347e355a354" ,
         *         tags: [] ,
         *         thumbnail_url: "https://res.cloudinary.com/dpdy0n2qi/image/upload/c_limit,h_60,w_90/v1546416373/jdkd04yiic0hmy1plund.jpg" ,
         *         type: "upload" url: "http://res.cloudinary.com/dpdy0n2qi/image/upload/v1546416373/jdkd04yiic0hmy1plund.jpg",
         *          version: 1546416373,
         *          width: 1920
         *     }
         * }
         */
        if (result.event === 'success') {

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
                        cloudName: 'dpdy0n2qi', apiKey: '374716178173586',
                        cropping: true, uploadSignature: this.generateSignature
                    }, this.resultCallback);
                }}>{this.props.imageId ? 'Change image' : 'Upload image'}
                </button>
            </div>
        );
    }
};

export default ImageUploadWidget;