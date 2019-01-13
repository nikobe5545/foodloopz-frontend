import React from "react";

const breadcrumbStyle = {
    padding: '70px'
};

export default class BreadcrumbArea extends React.Component {

    render() {
        return (
            <section className="bg-1">
                <div className="container" style={breadcrumbStyle}>
                    <div className="text-center">
                        <h1 className="text-white">{this.props.heading}</h1>
                        <p className="text-white">{this.props.text}</p>
                    </div>
                </div>
            </section>
        );
    }
}