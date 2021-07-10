import React ,{ Component ,Fragment} from 'react'
import { findRcMatchList } from '../../../api/matchlist'
import SearchList from '../../../components/searchList/index'
class index extends Component{
  getSportList =(params)=>{
    React.changeLoading(true)
    findRcMatchList({
      ...params,
      matchType:2,
    }).then(res=>{
      React.changeLoading(false)
    })
  }
  render(){
    return(
      <Fragment>
        <SearchList init={this.getSportList}></SearchList>
      </Fragment>
    )
  }
}
export default index