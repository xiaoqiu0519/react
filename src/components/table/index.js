
import React,{PureComponent} from 'react'
import { Table ,Pagination} from 'antd';
import './index.less'
export default class TableIndex extends PureComponent{
  render(){
    const {pagination:{total},onChange} = this.props
    return(
      <>
        <Table {...this.props} pagination={ false }/>
        <div className='PaginationFooter'>
          <div className='Btns'>
            {this.props.children}
          </div> 
          <Pagination showQuickJumper defaultCurrent={1} total={total} onChange={onChange} />
        </div>
      </>
    )
  }
}