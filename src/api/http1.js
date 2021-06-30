import Axios from "axios";

Axios.defaults.baseURL = 'http://prlegw.test-newsports.com/'
Axios.defaults.timeout = 2000

Axios.interceptors.request.use((config)=>{
  const token = sessionStorage.getItem('token')
  if(token){
    config.headers = config.headers || {}
    config.headers['token'] = token
  }
  return config
},err=>{
  return Promise.reject(err)
})

Axios.interceptors.response.use((response)=>{
  return response.data
},err=>{
  return Promise.reject(err)
})


export const $post =(url,params)=> {
  return new Promise((resolve,reject)=>{
    Axios.post(url,params).then(res=>{
      resolve(res)
    },err=>{
      reject(err)
    })
  })
}
