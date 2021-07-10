import React ,{ Component ,Fragment} from 'react'
import { findRcMatchList } from '../../../api/matchlist'
import SearchList from '../../../components/searchList/index'
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
      <Fragment>
        <SearchList init={this.getSportList}></SearchList>
      </Fragment>
    )
  }
}
export default index