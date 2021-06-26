import React ,{ Component } from "react"
import { connect } from "react-redux";
import { actionCreators } from './store'
const tableList = class tableList extends Component{
  constructor(props){
    super(props)
    this.state = {
      username:'1111'
    }
    this.handelInput = this.handelInput.bind(this)
  }
  render(){
    const { user ,changeUser} = this.props
    return (
      <div>
        <h3>{user}</h3>
        <input type="text" defaultValue={this.state.username} onChange={this.handelInput} placeholder='输入' />
        <button onClick={()=>{changeUser(this.state.username)}}>add</button>
      </div>
    )
  };
  handelInput(e){
    this.setState({
      username:e.target.value
    })
    console.log(this.state)
  }
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
    changeUser(num){
      console.log(num)
      dispatch(actionCreators.changeuser(num))
    }
  }
}
export default connect(mapState,mapDispach)(tableList)