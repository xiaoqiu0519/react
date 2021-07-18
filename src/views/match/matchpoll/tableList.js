import React, { Component } from 'react'
import { connect } from 'react-redux'

export class tablelist extends Component {
  state={
    data:1235
  }
  getData=()=>{
    console.log(12121)
  }
  render() {
    const { data } = this.state
    return (
      <div>
        {data}
      </div>
    )
  }
}
export default connect(
  state=>({
  
  }), 
  {

  },
  null,
  {
    forwardRef:true
  }
)(tablelist)
