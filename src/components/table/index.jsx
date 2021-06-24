import React ,{ Component } from "react"
import { connect } from "react-redux";
import { actionCreators } from './store'
const tableList = class tableList extends Component{
  render(){
    const { user ,changeUser} = this.props
    return (
      <div>
        <h3>{user}</h3>
        <button onClick={changeUser}>add</button>
      </div>
    )
  };
  componentDidMount(){
    console.log(this)
  }
}
const mapState = (state)=>{
  return{
    user:state.table.user
  }
} 
const mapDispach =(dispatch)=>{
  return{
    changeUser(){
      dispatch(actionCreators.changeuser())
    }
  }
}
export default connect(mapState,mapDispach)(tableList)