import { connect } from 'react-redux';
import React, { Component} from 'react'
import { Radio,Input ,Select} from 'antd';
import  { getSport } from '../../store/actions/app'
import { 
  handleRadioChange,
  handleChange,
  changeInput
} from '../../store/actions/searchlist'
import { uPosIntPattern } from '../../utils/validReg'
import { groupTime } from '../../utils/contants'
import './index.less'
let SearchList = class searchList extends Component {
  // state = {
  //   matchId:'',
  //   matchQueryType:1,
  //   sportId:''
  // }
  handleRadioChange = async (e) =>{
    await this.props.handleRadioChange(e.target.value)
    await this.props.init()
  }
  handleChange = async (value)=>{
    // await this.setState({ sportId: value });
    await this.props.handleChange(value)
    await this.props.init()
  }
  changeInput = (e)=>{
    let value = e.target.value.replace(uPosIntPattern, '')
    this.props.changeInput(value)
  }
  componentDidMount(){
    if(JSON.stringify(this.props.sportArr) === '{}'){
      this.props.getSport()
    }
    this.props.init()
  }
  render() {
    const { Option } = Select;
    const { sportArr ,matchQueryType,matchId,init} = this.props
    return (
      <div className='search_list'>
        <nav className='groupTime'>
          <Radio.Group value={matchQueryType} onChange={this.handleRadioChange}>
            {
              groupTime.map(item=>{
                return <Radio.Button key={item.code} value={item.code}>{item.value}</Radio.Button>
              })
            }
          </Radio.Group>
        </nav>
        <nav className='MatchId'>
          <label>Match ID: </label>
          <Input value={matchId} defaultValue={matchId} style={{ width: 180 }} onBlur={()=>init(this.state)} onChange={this.changeInput} placeholder="MatchId" />
        </nav>
        <nav className='sportId'>
          <label>Sport: </label>
          <Select placeholder='select' style={{ width: 180 }} onChange={this.handleChange}>
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
    sportArr:state.app.sportArr,
    matchId:state.searchList.matchId,
    sportId:state.searchList.matchId,
    matchQueryType:state.searchList.matchQueryType,
  }),
  {
    getSport,
    handleRadioChange,
    handleChange,
    changeInput
  }
)(SearchList)