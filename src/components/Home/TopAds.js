import React from 'react'
import TopAd from './TopAd'

import {connect} from 'react-redux'
import {fetchTopAds} from './topads-actions'

const mapStateToProps = state => {
  return {
    topAds: state.home.topAds
  }
}

const mapDispatchToProps = {
  fetchTopAds
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class TopAds extends React.Component {
  constructor (props) {
    super(props)
    if (this.props.topAds.didInvalidate) {
      console.log('Fetching top ads, inside component. Props', this.props)
      this.props.fetchTopAds()
    }
  }

  render () {
    return (
      <div id='carouselExampleControls' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>
          {
            this.props.topAds.items.map((topAd, index) => (
              <TopAd key={index} topAd={topAd} active={index === 0 ? 'active' : ''} />
            ))
          }
        </div>
        <a className='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    )
  }
})
