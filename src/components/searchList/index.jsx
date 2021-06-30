import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Radio,Input ,Select} from 'antd';
import  * as actionCreators  from '../../store/actionCreators'
import { validUAllnum } from '../../utils'
import './index.less'
const searchList = class searchList extends Component {
  constructor(props){
    super(props)
    this.state = {
      matchId:'',
      matchQueryType:1,
      sportId:''
    }
  }
  handleSizeChange = (e) =>{
    this.setState({ matchQueryType: e.target.value });
    this.props.init(this.state)
  }
  handleChange = async (value)=>{
    await this.setState({ sportId: value });
    await this.props.init(this.state)
  }
  blurInput = ()=>{
    this.props.init(this.state)
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
          <Input defaultValue={matchId} style={{ width: 180 }} onChange={(e)=>validUAllnum(this,'matchId',e.target.value)} onBlur={this.blurInput} placeholder="MatchId" />
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
const mapState =(state)=>{
  return{
    sportArr:state.app.sportArr
  }
}
const mapDispatch =(dispatch)=>{
  return{
    getSport(){
      // 获取运动类型，需要传递的是一个对象，此处 actionCreators.getSport() 返回的是一个函数需要使用中间件处理
      dispatch(actionCreators.getSport())
    }
  }
}
export default connect(mapState,mapDispatch)(searchList)