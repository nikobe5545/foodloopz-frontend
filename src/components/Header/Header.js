import React from 'react';
import {connect} from "react-redux";
import {loginError, loginUser} from "./auth-actions";


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = {
    loginUser,
    loginError
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.email || !this.state.password) {
            this.setState({
                email: this.state.email ? this.state.email : '',
                password: this.state.password ? this.state.password : ''
            });
            return this.props.loginError("Du måste fylla i både email och lösenord");
        }
        return this.props.loginUser({email: this.state.email, password: this.state.password});
    }

    handleInputEmail(event) {
        this.setState({email: event.target.value})
    }

    handleInputPassword(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand text-white" href="/">FOODLOOPZ</a>
                <button className="navbar-toggler bg-light" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">HEM <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">LÄGG TILL ANNONS</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                        <li className="nav-item order-2 order-md-1"><a href="#" className="nav-link" title="settings"><i
                            className="fa fa-cog fa-fw fa-lg"/></a></li>
                        <li className="dropdown order-1">
                            <button type="button" id="dropdownMenu1" data-toggle="dropdown"
                                    className="btn btn-outline-secondary dropdown-toggle">Login <span
                                className="caret"/></button>
                            <ul className="dropdown-menu dropdown-menu-right mt-2">
                                <li className="px-3 py-2">
                                    <form className="form" role="form" onSubmit={this.handleSubmit}>
                                        <div className="form-group">
                                            <input id="emailInput" placeholder="Email" onInput={this.handleInputEmail}
                                                   className="form-control form-control-sm" type="text" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <input id="passwordInput" placeholder="Password" onInput={this.handleInputPassword}
                                                   className="form-control form-control-sm" type="text" required=""/>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">Login</button>
                                        </div>
                                        <div className="form-group text-center">
                                            <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot
                                                password?</a></small>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
});