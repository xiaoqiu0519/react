
import React,{PureComponent} from 'react'
import { Table ,Pagination} from 'antd';
import './index.less'
export default class TableIndex extends PureComponent{
  state={
    current:1,
    size:20
  }
  onChange = async e =>{
    await this.setState({current:e})
    await this.props.init({
      current:this.state.current,
      size:this.state.size
    })
  }
  handleTableChange = async e =>{
    await this.setState({size:e})
    await this.props.init({
      current:this.state.current,
      size:this.state.size
    })
  }
  render(){
    const {pagination:{total}} = this.props
    return(
      <>
        <Table {...this.props} pagination={ false }/>
        <div className='PaginationFooter'>
          <div className='Btns'>
            {this.props.children}
          </div> 
          <Pagination 
            showTotal={()=>`Total ${total} items`} 
            showQuickJumper 
            total={total} 
            defaultPageSize={20}
            pageSizeOptions={['20','30','50','100']}
            onChange={this.onChange} 
            onShowSizeChange={this.onShowSizeChange}
          />
        </div>
      </>
    )
  }
}