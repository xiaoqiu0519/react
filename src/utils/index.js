import { uAllnum } from './validReg'

export const validUAllnum =(e,target,value)=>{
  if(!uAllnum.test(value)){
    e.setState({
      target:value.slice(0,value.length-1)
    })
  }
  console.log(value)
  return value
} 