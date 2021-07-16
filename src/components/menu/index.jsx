
import React,{Component,Fragment} from 'react'
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import { routers } from '../../utils/router'
import './index.less'
const { SubMenu } = Menu;
class Index extends Component{
  state = {
    current: sessionStorage.getItem('preRoter') || '/match/matchlist',
  };
  handleClick = e => {
    this.setState({
      current: e.key,
    });
    sessionStorage.setItem('preRoter',e.key)
    this.props.history.push(e.key)
  };
  render(){
    const {current} = this.state
    const defaultOpenKeys = current.match(/.*\//)[0].slice(0,-1)
    return(
      <Fragment>
        <div className='MenuList'>
          <h1>菜单导航</h1>
          <div style={{background:'#1DA57A',height:'10px'}}></div>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 ,overflow:'auto'}}
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[current]}
            className={'menucont'}
            mode="inline"
          >
            {
              routers.map((item)=>{
                return (
                  <SubMenu 
                  key={item.path} 
                  title={<span>{item.name}</span>}>
                    {
                      item.children.map(list=>{
                        return <Menu.Item key={list.path}>{list.name}</Menu.Item>
                      })
                    }
                  </SubMenu>
                )
              })
            }
          </Menu>
        </div>
      </Fragment>
    )
  }
}
export default withRouter(Index)