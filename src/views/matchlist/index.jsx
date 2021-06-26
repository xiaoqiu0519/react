import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class index extends Component{
  
  render(){
    const { add ,dddd} = this.props
    return(
      <div>
        <h1>{dddd}</h1>
        <button onClick={add}>新增</button>
      </div>
      
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    dddd:state.matchlist.dddd
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