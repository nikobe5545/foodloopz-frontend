import {combineReducers} from 'redux'
import {topAds} from './topAds'
import {ad} from './ad'

export default combineReducers({
    topAds,
    ad
});