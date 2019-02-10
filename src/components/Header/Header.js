import React from 'react'
import {connect} from 'react-redux'
import {loginError, loginUser} from '../Auth/auth-actions'
import Auth from '../Auth/Auth'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  loginUser,
  loginError
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class Header extends React.Component {
  constructor (props) {
    super(props)
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
      return this.props.loginError('Du måste fylla i både email och lösenord')
    }
    return this.props.loginUser({email: this.state.email, password: this.state.password})
  }

  handleInputEmail (event) {
    this.setState({email: event.target.value})
  }

  handleInputPassword (event) {
    this.setState({password: event.target.value})
  }

  render () {
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-transparent'>
          <a className='navbar-brand' href='/'><img
            src='/images/foodloopz_logo.webp'
            alt='FOODLOOPZ' /></a>

          <button className='navbar-toggler' type='button' data-toggle='collapse'
            data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active pr-3 pt-2'>
                <a className='nav-link' href='#'>MARKNADSPLATS</a>
              </li>
              <li className='nav-item active pr-3 pt-2'>
                <a className='nav-link' href='#'>OM</a>
              </li>
              <li className='nav-item active pr-3 pt-2'>
                <a className='nav-link' href='#'>PROJEKT</a>
              </li>
              <li className='nav-item active pr-3 pt-2'>
                <a className='nav-link' href='#'>NYHETER</a>
              </li>
            </ul>
            <ul className='navbar-nav mr-0 justify-content-end'>
              <li className='nav-item active pt-2'>
                {!this.props.auth.email && <Auth />}
                {this.props.auth.email && <a href=''>MINA SIDOR</a>}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  };
})
