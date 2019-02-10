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
    this.state = {...props.organization}
    this.handleInputContactPerson = this.handleInputContactPerson.bind(this)
    this.handleInputEmail = this.handleInputEmail.bind(this)
    this.handleInputOrganizationName = this.handleInputOrganizationName.bind(this)
    this.handleInputOrganizationNumber = this.handleInputOrganizationNumber.bind(this)
    this.handleInputPassword = this.handleInputPassword.bind(this)
    this.handleInputVerifyPassword = this.handleInputVerifyPassword.bind(this)
    this.handleInputPhoneNumber = this.handleInputPhoneNumber.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputOrganizationName (event) {
    this.setState({organizationName: event.target.value})
  }

  handleInputOrganizationNumber (event) {
    // TODO validate org. no.
    this.setState({organizationNumber: event.target.value})
  }

  handleInputContactPerson (event) {
    this.setState({contactPerson: event.target.value})
  }

  handleInputEmail (event) {
    this.setState({email: event.target.value})
  }

  handleInputPhoneNumber (event) {
    this.setState({phoneNumber: event.target.value})
  }

  handleInputPassword (event) {
    this.setState({password: event.target.value})
  }

  handleInputVerifyPassword (event) {
    this.setState({verifyPassword: event.target.value})
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
                <div className='form-group'>
                  <label htmlFor='organizationName'>{I18n.t('register.form.name.label')}</label>
                  <input type='text' className='form-control' id='organizationName' aria-describedby='organizationNameHelp'
                    placeholder={I18n.t('register.form.name.hint')} onInput={this.handleInputOrganizationName}
                    value={this.state.organizationName} />
                </div>
                <div className='form-group'>
                  <label htmlFor='organizationNumber'>{I18n.t('register.form.org_no.label')}</label>
                  <input type='text' className='form-control' id='organizationNumber' aria-describedby='organizationNumberHelp'
                    placeholder={I18n.t('register.form.org_no.hint')}
                    onInput={this.handleInputOrganizationNumber} value={this.state.organizationNumber} />
                </div>
                <div className='form-group'>
                  <label htmlFor='contactPerson'>{I18n.t('register.form.contact_person_name.label')}</label>
                  <input type='text' className='form-control' id='contactPerson' aria-describedby='contactPersonHelp'
                    placeholder={I18n.t('register.form.contact_person_name.hint')}
                    onInput={this.handleInputContactPerson} value={this.state.contactPerson} />
                </div>
                <div className='form-group'>
                  <label htmlFor='email'>{I18n.t('register.form.email.label')}</label>
                  <input type='text' className='form-control' id='email' aria-describedby='emailHelp'
                    placeholder={I18n.t('register.form.email.hint')}
                    onInput={this.handleInputEmail} value={this.state.email} />
                </div>
                <div className='form-group'>
                  <label htmlFor='phoneNumber'>{I18n.t('register.form.phone.label')}</label>
                  <input type='text' className='form-control' id='phoneNumber' aria-describedby='phoneNumberHelp'
                    placeholder={I18n.t('register.form.phone.hint')}
                    onInput={this.handleInputPhoneNumber} value={this.state.phoneNumber} />
                </div>
                <div className='form-group'>
                  <label htmlFor='description'>{I18n.t('register.form.password.label')}</label>
                  <input type='password' className='form-control' id='text'
                    placeholder={I18n.t('register.form.password.hint')}
                    onInput={this.handleInputPassword} value={this.state.password} />
                </div>
                <div className='form-group'>
                  <label htmlFor='description'>{I18n.t('register.form.password.verify')}</label>
                  <input type='password' className='form-control' id='text'
                    placeholder={I18n.t('register.form.password.hint')}
                    onInput={this.handleInputVerifyPassword} value={this.state.verifyPassword} />
                </div>
                <div className='form-check pb-3'>
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
