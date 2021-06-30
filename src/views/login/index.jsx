import React ,{ Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { login } from '../../api/commom'
class Index extends Component{
  render(){
    const { setToken } = this.props
    const onFinish = async ({password,name}) => { 
      await login({
        password:password,
        name:name,
        googleCode:1244,
        systemId:2,
      }).then(res=>{
        console.log(res)
        if(res.code === 0){
          console.log(23434)
          setToken(res.data.token)
          this.props.history.push('/matchlist')
        }
      })
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return(
      <Form
        style={{paddingTop:'150px'}}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    token:state.app.token
  }
}
const mapDispathToProps = (dispatch)=>{
  return{
    setToken(token){
      dispatch({
        type:'set_token',
        token
      })
      sessionStorage.setItem('token',token)
    }
  }
}
export default connect(mapStateToProps,mapDispathToProps)(Index)