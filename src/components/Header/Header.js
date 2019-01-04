import React from 'react';
import {connect} from "react-redux";
import {sendMessageToMainEndpoint} from "../../actions/websocketActions";
import {AdActions} from "../Ad/ad-reducer";


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (payload) => {
            dispatch(sendMessageToMainEndpoint(AdActions.FETCH_AD, payload));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Foodloopz</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Hem <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lägg till annons</a>
                            </li>
                        </ul>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Logga in
                            </a>
                            <div className="dropdown-menu">
                                <form className="px-2 py-2 my-2 my-lg-0">
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormEmail1">Email</label>
                                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                                               placeholder="email@example.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormPassword1">Lösenord</label>
                                        <input type="password" className="form-control"
                                               id="exampleDropdownFormPassword1" placeholder="Password"/>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                                        <label className="form-check-label" htmlFor="dropdownCheck">
                                            Kom ihåg mig
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Logga in</button>
                                </form>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Registrera er</a>
                                <a className="dropdown-item" href="#">Glömt lösenord?</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };
});