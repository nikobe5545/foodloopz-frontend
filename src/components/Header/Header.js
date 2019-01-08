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
                                <form className="px-2 py-2 my-2 my-lg-0" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormEmail1">Email</label>
                                        <input type="email" onInput={this.handleInputEmail} className="form-control"
                                               id="exampleDropdownFormEmail1"
                                               placeholder="email@example.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleDropdownFormPassword1">Lösenord</label>
                                        <input type="password" onInput={this.handleInputPassword}
                                               className="form-control"
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

    /**
     * constructor (props) {
    super()
    props.showTint()
    this.state = {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
  }
     handleSubmit (event) {
    event.preventDefault()

    if (!this.state.email || !this.state.password) {
      this.setState({
        email: this.state.email ? this.state.email : '',
        password: this.state.password ? this.state.password : ''
      })
      return this.props.loginError(i18n.errors.login.fieldsEmpty)
    }
    return this.props.loginUser({ email: this.state.email, password: this.state.password })
  }
     handleInputEmail (event) {
    this.setState({ email: event.target.value })
  }
     handleInputPassword (event) {
    this.setState({ password: event.target.value })
  }
     render () {
    const emailFieldEmptyClass = this.state.email === '' ? ' login__email--error' : ''
    const passwordFieldEmptyClass = this.state.password === '' ? ' login__password--error' : ''
    return (
      <aside className='login'>
        <h2 className='login__header'>{i18n.login.header}</h2>
        {this.props.auth.errorMessage && <span className='login__error'>{this.props.auth.errorMessage}</span>}
        <form method='post' onSubmit={this.handleSubmit}>
          <fieldset className='login__fields'>
            <label className='login__label' htmlFor='login-email'>{i18n.login.emailLabel}</label>
            <input name='email' id='login-email' onInput={this.handleInputEmail} className={`login__email${emailFieldEmptyClass}`} type='email' />
            <label className='login__label' htmlFor='login-password'>{i18n.login.passwordLabel}</label>
            <input name='password' id='login-password' onInput={this.handleInputPassword} className={`login__password${passwordFieldEmptyClass}`} type='password' />
          </fieldset>
          <button className='button button-cta login__submit'>{i18n.buttons.login}</button>
        </form>
      </aside>
    )
  }
     */
});