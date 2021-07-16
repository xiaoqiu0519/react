import React ,{PureComponent} from 'react'
import MyTable from '../../../components/table/index'
import {
  batchUpdateMatchSaleStatus
} from '../../../api/matchlist'
import {
  CiCircleOutlined,
  BugOutlined,
  ShopOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import { Button ,Modal} from 'antd';
import { parseTime } from '../../../utils/index'
import './index.less'
const { confirm } = Modal;
class tableList extends PureComponent{
  state = {
    selectedRowKeys: [],
  };
  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
    console.log(selectedRowKeys)
  };
  handleTableChange = e =>{
    this.props.init({
      size:e.pageSize,
      pages:e.current
    })
  }
  goTo = (type,row)=>{
    this.props.history.push('/trading/task-center')
  }
  handleButton=(type)=>{
    const matchIdList = this.state.selectedRowKeys
    confirm({
      title: 'Are you sure to change the status?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        batchUpdateMatchSaleStatus({
          matchIdList,
          saleStatus:type
        }).then(res=>{

        })
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  render(){
    const columns = [
      {
        title: 'Match ID',
        dataIndex: 'matchId',
        width:70,
      },
      {
        title: 'Sport',
        dataIndex: 'sportName',
        width:85,
      },
      {
        title: 'Region',
        dataIndex: 'regionName',
        width:100,
      },
      {
        title: 'Tournament',
        dataIndex: 'tournament',
        width:120,
      },
      {
        title: 'Match',
        width:240,
        align:'center',
        render:(_,record)=>{
          return(
            <div className='homeVSaway'>
              <p className='home'>{record.home}</p>
              <p className='VS'>VS</p>
              <p className='away'>{record.away}</p>
            </div>
          )
        }
      },
      {
        title: 'Official Time / Running Time',
        width:140,
        render:(text,record)=>{
          return(
            <div className='OfficialRunning'>
              <p>{parseTime(record.openTime)}</p>
              <p>{parseTime(record.beginTime)}</p>
            </div>
          )
          
        }
      },
      {
        title: 'Operation',
        width:80,
        render:(text,record)=>{
          return(
            <div className='Operation'>
              <CiCircleOutlined onClick={()=>this.goTo(1,record)}/>
              <BugOutlined onClick={()=>this.goTo(1,record)}/>
              <ShopOutlined onClick={()=>this.goTo(1,record)}/>
            </div>
          )
        }
      }, 
    ]
    const data = this.props.data.records
    const {selectedRowKeys} = this.state
    const { pagination } = this.props
    const tableHeight = document.body.clientHeight - 180
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    return(
      <>
        <MyTable
          className='MatchListTable'
          bordered
          rowSelection={rowSelection}
          rowKey='matchId'
          onChange={this.handleTableChange}
          pagination={pagination}
          scroll={{ y:  tableHeight}}
          columns={columns} 
          dataSource={data}
        >
          <>
            <Button onClick={()=>this.handleButton(1)} type="primary">Activate</Button>
            <Button onClick={()=>this.handleButton(2)} type="primary">Suspend</Button>
            <Button onClick={()=>this.handleButton(3)} type="primary">Hide</Button>
            <Button onClick={()=>this.handleButton(4)} type="primary">Completed</Button>
          </>
          </MyTable>
      </>
    )
  }
}

export default withRouter(tableList)
