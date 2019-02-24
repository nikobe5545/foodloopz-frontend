import React from 'react'
import {I18n} from 'react-redux-i18n'

const Fail = () => {
  return (
    <div>
      <p>{I18n.t('register.fail.message')}</p>
    </div>
  )
}

export default Fail
