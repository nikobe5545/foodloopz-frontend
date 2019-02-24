import {connect} from 'react-redux'
import React from 'react'
import Form from './Form'
import Success from './Success'
import Fail from './Fail'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {I18n} from 'react-redux-i18n'

const mapStateToProps = (state) => {
  return {
    registration: state.registration
  }
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class Register extends React.Component {
  constructor (props) {
    super(props)
    this.getTransitionClass = this.getTransitionClass.bind(this)
  }

  componentDidUpdate () {
    const element = document.getElementById('registration-container')
    element.scrollIntoView({behavior: 'smooth'})
  }

  getTransitionClass () {
    if (this.props.registration.isPosting) {
      return ' fade'
    } else {
      return ' appear'
    }
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <div id='registration-container' className='container-fluid pl-0 pr-0 bg-light w-100 px-md-3 py-md-3 text-dark-grey'>
          <div className='row p-5'>
            {this.props.registration.isPosting &&
              <div className='spinner-grow' role='status'>
                <span className='sr-only'>{I18n.t('register.spinner.posting')}</span>
              </div>}
            <div className={'col border p-5 bg-white' + this.getTransitionClass()}>
              {this.props.registration.registrationSuccess &&
              <Success data={this.props.registration.item} />}
              {this.props.registration.registrationFail && <Fail />}
              {!this.props.registration.registrationSuccess && !this.props.registration.registrationFail &&
              <Form />}
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
})
