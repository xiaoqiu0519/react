import React, { Component } from 'react'
import { Radio,Input } from 'antd';
import './index.less'
export default class searchList extends Component {
  state = {
    timeType:'Live'
  }
  handleSizeChange = (e) =>{
    this.setState({ timeType: e.target.value });
    // console.log(e.target.value)
  }
  render() {
    const { timeType } = this.state
    return (
      <div className='search_list'>
        <Radio.Group value={timeType} onChange={this.handleSizeChange}>
          <Radio.Button value="Live">Live</Radio.Button>
          <Radio.Button value="Today">Today</Radio.Button>
          <Radio.Button value="Early">Early</Radio.Button>
          <Radio.Button value="Yesterday">Yesterday</Radio.Button>
        </Radio.Group>
        <nav>
          <label>Match ID: </label>
          <Input placeholder="Basic usage" />
        </nav>
      </div>
    )
  }
}
