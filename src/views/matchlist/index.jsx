import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { findRcMatchList } from '../../api/matchlist'
import SearchList from '../../components/searchList/index'
class index extends Component{
  getSportList =(params)=>{
    findRcMatchList({
      ...params,
      matchType:2,
    }).then(res=>{

    })
  }
  render(){
    return(
      <div>
        <SearchList init={this.getSportList}></SearchList>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(index)