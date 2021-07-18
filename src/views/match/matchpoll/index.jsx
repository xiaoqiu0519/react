import React, { Component } from 'react'
import TableList from './tableList'
import SearchPoll from '../../../components/searchPoll'
export default class index extends Component {
  myTableRef = React.createRef()
  handleClick=()=>{
    this.myTableRef.current.getData()
    console.log(this.myTableRef.current.setState({
      data:6789
    }))
  }
  
  render() {
    return (
      <div>
        <SearchPoll></SearchPoll>
        
        <TableList ref={this.myTableRef}></TableList>
      </div>
    )
  }
}
