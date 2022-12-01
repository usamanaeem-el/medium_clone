import React, { useState } from 'react';
import { Modal } from 'antd';
import './registerModal.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Auth } from 'aws-amplify';

const SigninModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSignin = async (values) => {
    try {
      const user = await Auth.signIn(values.username, values.password);
      console.log("Successfully login")
    } catch (error) {
      console.log('error signing in', error);
    }
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <button onClick={showModal}>Sign in</button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='flex flex-col items-center justify-center py-20'>
          <h3 className='text-bold font-sans text-gray'>Sign In</h3>
          <br />
          <Form
            name='normal_login'
            className='login-form'
            labelCol='Log In'
            initialValues={{
              remember: true,
            }}
            onFinish={onSignin}
          >
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className='login-form-forgot' href=''>
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type='secondary'
                htmlType='submit'
                className='login-form-button'
              >
                Log in
              </Button>
              Or <a href=''>register now!</a>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default SigninModal;
