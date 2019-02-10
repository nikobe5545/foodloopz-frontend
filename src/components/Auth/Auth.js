import React from 'react'
import {connect} from 'react-redux'
import {loginError, loginUser} from './auth-actions'

import './auth.css'

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
)(class Auth extends React.Component {
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
      <div className='dropleft'>
        <a className='dropdown-toggle' href='#' role='button' id='dropdownMenuLink'
          data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    LOGGA IN
        </a>
        <div className='dropdown-menu login-box shadow'>
          <form className='px-4 py-3'>
            <div className='form-group'>
              <label htmlFor='email'>Email-adress</label>
              <input type='email'
                className='form-control'
                id='email'
                placeholder='email@example.com'
                onInput={this.handleInputEmail}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Lösenord</label>
              <input type='password'
                className='form-control'
                id='password'
                placeholder='AaBb1234'
                onInput={this.handleInputPassword}
              />
            </div>
            <button type='submit' className='btn btn-info shadow' onClick={this.handleSubmit}>Logga in</button>
          </form>
          <div className='dropdown-divider' />
          <a className='dropdown-item text-black-50' href='#'>Registrera företag</a>
          <a className='dropdown-item text-black-50' href='#'>Glömt lösenord?</a>
        </div>
      </div>
    )
  }
})
