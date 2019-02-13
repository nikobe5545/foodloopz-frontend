import React, {Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {connect} from 'react-redux'
import {fetchOrganization, postOrganization} from './organization-actions'
import {I18n} from 'react-redux-i18n'
import './create-update.css'

const mapStateToProps = (state) => {
  return {
    organization: state.organization
  }
}

const mapDispatchToProps = {
  fetchOrganization,
  postOrganization
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class Create extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ...props.organization,
      organizationNumberIsValid: true,
      emailIsValid: true,
      passwordsAreMatching: true,
      passwordIsValid: true
    }
    this.handleInputContactPerson = this.handleInputContactPerson.bind(this)
    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.emailIsValid = this.emailIsValid.bind(this)
    this.handleInputOrganizationName = this.handleInputOrganizationName.bind(this)
    this.handleInputOrganizationNumber = this.handleInputOrganizationNumber.bind(this)
    this.validateOrganizationNumber = this.validateOrganizationNumber.bind(this)
    this.organizationNumberIsValid = this.organizationNumberIsValid.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
    this.handleInputVerifyPassword = this.handleInputVerifyPassword.bind(this)
    this.validatePasswordsMatching = this.validatePasswordsMatching.bind(this)
    this.passwordsAreMatching = this.passwordsAreMatching.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
    this.passwordIsValid = this.passwordIsValid.bind(this)
    this.handleInputPhoneNumber = this.handleInputPhoneNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputOrganizationName (event) {
    this.setState({organizationName: event.target.value})
  }

  validateOrganizationNumber () {
    this.setState({organizationNumberIsValid: this.organizationNumberIsValid()})
  }

  /**
   * Allowing personnummer (social security number) as well as organization numbers here
   * @returns {boolean}
   */
  organizationNumberIsValid () {
    let organizationNumber = this.state.organizationNumber
    if (!organizationNumber) {
      return false
    }
    // Clean away all but numbers
    organizationNumber = organizationNumber.replace(/[^0-9]/g, '')
    let match = /^([1,2][0-9])?([1-9]{2}[0-9]{8})$/.exec(organizationNumber)
    if (!match) {
      return false
    }
    const ssn = match[2].split('').reverse()
    // Luhn checksum digit
    const sum = ssn
      .map(function (n) {
        return Number(n)
      })
      .reduce(function (previous, current, index) {
        if (index % 2) current *= 2
        if (current > 9) current -= 9
        return previous + current
      })
    return sum % 10 === 0
  }

  handleInputOrganizationNumber (event) {
    this.setState({organizationNumber: event.target.value})
  }

  handleInputContactPerson (event) {
    this.setState({contactPerson: event.target.value})
  }

  validateEmail () {
    this.setState({emailIsValid: this.emailIsValid()})
  }

  emailIsValid () {
    // eslint-disable-next-line no-useless-escape
    return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.exec(this.state.email)
  }

  handleInputEmail (event) {
    // TODO validate email
    this.setState({email: event.target.value})
  }

  handleInputPhoneNumber (event) {
    // TODO validate phone number
    this.setState({phoneNumber: event.target.value})
  }

  handleInputPassword (event) {
    this.setState({password: event.target.value})
  }

  handleInputVerifyPassword (event) {
    this.setState({verifyPassword: event.target.value})
  }

  validatePasswordsMatching () {
    this.setState({passwordsAreMatching: this.passwordsAreMatching()})
  }

  passwordsAreMatching () {
    return this.state.password &&
        this.state.verifyPassword &&
        this.state.password === this.state.verifyPassword &&
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.exec(this.state.password)
  }

  validatePassword () {
    this.setState({passwordIsValid: this.passwordIsValid()})
  }

  passwordIsValid () {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.exec(this.state.password)
  }

  handleSubmit (event) {

  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <div className='container-fluid pl-0 pr-0 bg-light w-100 px-md-3 py-md-3 text-dark-grey'>
          <div className='row p-5'>
            <div className='col border p-5 bg-white'>
              <h3 className='header'>{I18n.t('register.sub_heading')}</h3>
              <p className='bread'>{I18n.t('register.info_text_1')}</p>
              <p className='bread'>{I18n.t('register.info_text_2')}</p>
              <hr />
              <form onSubmit={this.handleSubmit}>
                <div className='form-group p-2'>
                  <label htmlFor='organizationName'>{I18n.t('register.form.name.label')}</label>
                  <input type='text' className='form-control' id='organizationName' aria-describedby='organizationNameHelp'
                    placeholder={I18n.t('register.form.name.hint')} onInput={this.handleInputOrganizationName}
                    value={this.state.organizationName} />
                </div>
                <div className='form-group p-2'>
                  <label htmlFor='organizationNumber'>{I18n.t('register.form.org_no.label')}</label>
                  <input type='text'
                    className={'form-control' + (this.state.organizationNumberIsValid ? '' : ' is-invalid')}
                    id='organizationNumber' aria-describedby='organizationNumberHelp'
                    placeholder={I18n.t('register.form.org_no.hint')}
                    onInput={this.handleInputOrganizationNumber}
                    onBlur={this.validateOrganizationNumber}
                    value={this.state.organizationNumber} />
                  {
                    !this.state.organizationNumberIsValid &&
                    <div className='invalid-feedback'>{I18n.t('register.form.org_no.error')}</div>
                  }
                </div>
                <div className='form-group p-2'>
                  <label htmlFor='contactPerson'>{I18n.t('register.form.contact_person_name.label')}</label>
                  <input type='text' className='form-control' id='contactPerson' aria-describedby='contactPersonHelp'
                    placeholder={I18n.t('register.form.contact_person_name.hint')}
                    onInput={this.handleInputContactPerson} value={this.state.contactPerson} />
                </div>
                <div className='form-group p-2'>
                  <label htmlFor='email'>{I18n.t('register.form.email.label')}</label>
                  <input type='text'
                    className={'form-control' + (this.state.emailIsValid ? '' : ' is-invalid')}
                    id='email' aria-describedby='emailHelp'
                    placeholder={I18n.t('register.form.email.hint')}
                    onInput={this.handleInputEmail}
                    onBlur={this.validateEmail}
                    value={this.state.email} />
                  {
                    !this.state.emailIsValid &&
                    <div className='invalid-feedback'>{I18n.t('register.form.email.error')}</div>
                  }
                </div>
                <div className='form-group p-2'>
                  <label htmlFor='phoneNumber'>{I18n.t('register.form.phone.label')}</label>
                  <input type='text' className='form-control' id='phoneNumber' aria-describedby='phoneNumberHelp'
                    placeholder={I18n.t('register.form.phone.hint')}
                    onInput={this.handleInputPhoneNumber} value={this.state.phoneNumber} />
                </div>
                <div className='form-group p-2'>
                  <label htmlFor='description'>{I18n.t('register.form.password.label')}</label>
                  <input type='password'
                    className={'form-control' + (this.state.passwordIsValid ? '' : ' is-invalid')}
                    id='password'
                    placeholder={I18n.t('register.form.password.hint')}
                    onInput={this.handleInputPassword}
                    onBlur={this.validatePassword}
                    value={this.state.password} />
                  {
                    !this.state.passwordIsValid &&
                    <div className='invalid-feedback'>{I18n.t('register.form.password.invalidPassword')}</div>
                  }
                </div>
                <div className='form-group p-2'>
                  <label htmlFor='description'>{I18n.t('register.form.password.verify')}</label>
                  <input type='password'
                    className={'form-control' + (this.state.passwordsAreMatching ? '' : ' is-invalid')}
                    id='verifyPassword'
                    placeholder={I18n.t('register.form.password.hint')}
                    onInput={this.handleInputVerifyPassword}
                    onBlur={this.validatePasswordsMatching}
                    value={this.state.verifyPassword} />
                  {
                    !this.state.passwordsAreMatching &&
                    <div className='invalid-feedback'>{I18n.t('register.form.password.matchError')}</div>
                  }
                </div>
                <div className='form-check pt-2 pb-5'>
                  <input className='form-check-input' type='checkbox' value='acceptTerms' id='termsAndConditions' />
                  <label className='form-check-label' htmlFor='termsAndConditions'>
                    {I18n.t('register.form.agreement.text')} <a href='/terms'>{I18n.t('register.form.agreement.link_text')}</a>
                  </label>
                </div>
                <button type='submit' className='btn text-white pl-5 pr-5'>{I18n.t('register.form.submit.label')}</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
})
