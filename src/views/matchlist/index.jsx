import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { findEnumList } from '../../api/commom'
import SearchList from '../../components/searchList/index'
class index extends Component{
  componentDidMount(){
    findEnumList()
  }
  render(){
    const { add ,dddd,token} = this.props
    return(
      <div>
        <SearchList></SearchList>
        <h1>token{token}</h1>
        <h1>{dddd}</h1>
        <button onClick={add}>新增</button>
        {/* <button onClick={removeToken}>清除token</button> */}
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    dddd:state.matchlist.dddd,
    token:state.app.token
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    add(){
      dispatch(actionCreators.add())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(index)