import axios from 'axios'
import store from '../store/index'
import {BrowserRouter} from 'react-router-dom'
import { message } from 'antd';
const router = new BrowserRouter()

const service = axios.create({
  baseURL:'http://prlegw.test-newsports.com/',
  timeout:5000
})
service.interceptors.request.use((config)=> {
  const token = sessionStorage.getItem('token')
  if(token){
    config.headers = config.headers || {}
    config.headers['token'] = token
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

service.interceptors.response.use((response)=>{
  let stateCode = +response.data.code
  if (response.data.code === 20110 || response.data.code === 20111 || response.data.code === 8035 || response.data.code === 8011) {
    store.dispatch({type:'set_token',token:''})
    sessionStorage.setItem('token','')
    message.error('Login is abnormal, please login again');
    setTimeout(()=>{
      router.history.push('/login')
    },2000)
  }else if(stateCode !== 0){
    message.error(response.data.message);
  }
  return response.data;
},(error)=>{
  console.log(error)
  return Promise.reject(error);
})

export default service