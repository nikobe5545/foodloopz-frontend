import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import {render} from 'react-dom'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import CreateUpdateLoop from './components/Loop/CreateUpdate'
import {topAdsReducer} from './components/Home/topads-reducer'
import {loopReducer} from './components/Loop/loop-reducer'
import {authReducer} from './components/Auth/auth-reducer'
import thunk from 'redux-thunk'
import {loopCategoriesReducer} from './common/loop-category-reducer'
import {loopCertificationReducer} from './common/loop-certification-reducer'
import {addCSRFHeader} from './utils/rest'
import {checkLoginStatus} from './components/Auth/auth-actions'
import {i18nReducer, loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n'
import {translationsObject} from './utils/i18n'
import {organizationReducer} from './components/Organization/organization-reducer'
import Register from './components/Register/Register'
import {registrationReducer} from './components/Register/registration-reducer'

$.ajaxSetup({
  beforeSend: addCSRFHeader
})

const rootReducer = combineReducers({
  home: topAdsReducer,
  ad: loopReducer,
  auth: authReducer,
  ad_categories: loopCategoriesReducer,
  ad_certifications: loopCertificationReducer,
  i18n: i18nReducer,
  organization: organizationReducer,
  registration: registrationReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject))
store.dispatch(setLocale('se'))
store.dispatch(checkLoginStatus())

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/loop/view/:id?' component={CreateUpdateLoop} />
        <Route path='/loop/edit/:id?' component={CreateUpdateLoop} />
        <Route path='/organization/register/:id?' component={Register} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
