import React from 'react'
import { Route } from 'react-router-dom'
import { routers } from './routerConfig'
const RouterView = ()=>{
  return routers.map((item,index)=>{
    return <Route key={index} component={item.component}></Route>
  })
}

export default RouterView