import React ,{ Component ,Fragment} from 'react'
import { findRcMatchList } from '../../../api/matchlist'
import SearchList from '../../../components/searchList/index'
import TableList from './tableList'
import { connect } from 'react-redux'

class index extends Component{
  state = {
    tableData:{},
    pagination:{
      pageSizeOptions:['20','30','40','50'],
      showSizeChanger:true,
      total:0,
      showTotal:()=> 0  
    }
  }
  getSportList =(params)=>{
    const { matchId ,sportId,matchQueryType} = this.props
    React.changeLoading(true)
    findRcMatchList({
      size:20,
      current:1,
      matchId,
      sportId,
      matchQueryType,
      matchType:2,
      ...params,
    }).then(res=>{
      React.changeLoading(false)
      if(res.code === 0){
        const { pagination } = this.state
        this.setState({
          tableData:res.data,
          pagination:{
            ...pagination,
            total:res.data.total,
            showTotal:()=>`Total ${res.data.total}`,
            pageSize:20
          }
        })
      }
    })
  }
  render(){
    const { tableData,pagination }= this.state
    return(
      <Fragment>
        <SearchList init={this.getSportList}></SearchList>
        <TableList init={this.getSportList} data={tableData} pagination={pagination}></TableList>
      </Fragment>
    )
  }
}
export default connect(
  state=>({
    matchId:state.searchList.matchId,
    sportId:state.searchList.sportId,
    matchQueryType:state.searchList.matchQueryType
  }),
  {}
)(index)