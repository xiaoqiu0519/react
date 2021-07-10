import React, { Component } from 'react'
import { connect } from 'react-redux'

export class index extends Component {
  render() {
    return (
      <div>
        taskCenter
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
