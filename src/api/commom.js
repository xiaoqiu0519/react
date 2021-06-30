
// import { $post } from './http1'
// export const login = (params)=>{
//   console.log(params)
//   return $post('/login',params)
// }

// export const findEnumList = (params)=> {
//   return $post('/tcs/common/findEnumList',params)
//   // http.post('/tcs/common/findEnumList',params)
// }
import http from './http'
export const login =(params) => http.post('/login',params)

export const findEnumList = (params)=> http.post('/tcs/common/findEnumList',params)
