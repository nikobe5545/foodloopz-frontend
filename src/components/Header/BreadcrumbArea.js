import React from 'react'

const breadcrumbStyle = {
  padding: '70px'
}

export default class BreadcrumbArea extends React.Component {
  render () {
    return (
      <section>
        <div className='container text-white' style={breadcrumbStyle}>
          <div className='text-center'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
        </div>
      </section>
    )
  }
}
