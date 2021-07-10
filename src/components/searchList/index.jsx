import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Radio,Input ,Select} from 'antd';
import  { getSport } from '../../store/actions/app'
import { uPosIntPattern } from '../../utils/validReg'
import './index.less'
const searchList = class searchList extends Component {
  state = {
    matchId:'',
    matchQueryType:1,
    sportId:''
  }
  handleSizeChange = async (e) =>{
    await this.setState({ matchQueryType: e.target.value });
    await this.props.init(this.state)
  }
  handleChange = async (value)=>{
    await this.setState({ sportId: value });
    await this.props.init(this.state)
  }
  changeInput = (e)=>{
    let value = e.target.value.replace(uPosIntPattern, '')
    this.setState({ matchId: value })
  }
  componentDidMount(){
    if(JSON.stringify(this.props.sportArr) === '{}'){
      this.props.getSport()
    }
    this.props.init(this.state)
  }
  render() {
    const { matchQueryType ,matchId} = this.state
    const { Option } = Select;
    const { sportArr } = this.props
    const groupTime = [
      {code:1,value:'Live'},
      {code:2,value:'Today'},
      {code:3,value:'Early'},
      {code:4,value:'Yesterday'},
      {code:5,value:'Custom'}
    ]
    return (
      <div className='search_list'>
        <nav className='groupTime'>
          <Radio.Group value={matchQueryType} onChange={this.handleSizeChange}>
            {
              groupTime.map(item=>{
                return <Radio.Button key={item.code} value={item.code}>{item.value}</Radio.Button>
              })
            }
          </Radio.Group>
        </nav>
        <nav className='MatchId'>
          <label>Match ID: </label>
          <Input value={matchId} defaultValue={matchId} style={{ width: 180 }} ref={this.myRef} onChange={this.changeInput} placeholder="MatchId" />
        </nav>
        <nav className='sportId'>
          <label>Sport: </label>
          <Select defaultValue="score" style={{ width: 180 }} onChange={this.handleChange}>
            {
              Object.keys(sportArr).map(key=>{
                let item = sportArr[key]
                return <Option key={item.code} value={item.code}>{item.value}</Option>
              })
            }
          </Select>
        </nav>
      </div>
    )
  }
}
export default connect(
  state=>({
    sportArr:state.app.sportArr
  }),
  {
    getSport
  }
)(searchList)