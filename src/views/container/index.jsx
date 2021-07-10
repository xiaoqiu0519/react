import React, { Component } from 'react'
import { Switch ,Route,Redirect} from 'react-router-dom'
import Menu from '../../components/menu'
import { routers } from '../../utils/router'
const App  = class App extends Component {
  getRouter(){
    let arr = []
    routers.map(item=>item.children.map(list=> arr.push(list)))
    return arr
  }
  render() {
    return (
      <div className='container'>
        <div className='Meun'>
          <Menu></Menu>
        </div>
        <div className='BrowserRouter' key={this.props.location.key}>
          <Switch>
            {
              this.getRouter().map(item=>
                <Route path={item.path} key={item.path} exact component={item.component}></Route>
              )
            }
            <Redirect to='/match/matchlist'></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
export default App

