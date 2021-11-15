import { Button, Checkbox, Form, Input } from 'antd'
import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAccessToken } from '../../utils/localStorage'
import { getUserLoginInfoAction, loginAction } from './actions/LoginAction'
import './LoginStyle.css'
import { uidSelector, userInfoSelector } from './reducers/LoginReducer'

export const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(true)
    const accessToken = getAccessToken()
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(
            loginAction({
                username: userName,
                password: password,
            })
        )
    }
    
    useEffect(() => {
        if (accessToken) {
            history.push("/")
        }
    }, [accessToken, history])
    
    return (
        <div className="login-page">
            <div className="login-container">
                <h1>Đăng Nhập</h1>
                <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onSubmitCapture={handleSubmit} >
                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!', }]}>
                        <Input size="large" onChange={e => setUserName(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                        <Input.Password size="large" onChange={e => setPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
                        <Checkbox onChange={e => setRemember(e.target.checked)} checked={remember}>Nhớ mật khẩu</Checkbox>
                        <Button type="primary" htmlType="submit">Đăng nhập</Button>
                        <Button type="primary" htmlType="submit" className='regis-btn'>Đăng ký</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
