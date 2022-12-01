import React, { useState } from 'react';
import { Modal } from 'antd';
import './registerModal.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { signUp } from '../../shared/api';
import { Auth } from 'aws-amplify';
const SignupModal = () => {
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
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    try {
      const user = await Auth.signUp({
        username: values.username,
        password: values.password,
        attributes: {
          email: values.username,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
      console.log({ user });
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  return (
    <>
      <button onClick={showModal}>Register</button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='flex flex-col items-center justify-center py-20'>
          <h3 className='text-bold font-sans text-gray'>Sign up</h3>
          <br />
          <Form
            name='normal_login'
            className='login-form'
            labelCol='Log In'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
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
            <Form.Item
              name='confirmpassword'
              rules={[
                {
                  required: true,
                  message: 'Please confirm your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Confirm your Password'
              />
            </Form.Item>

            <Form.Item>
              <Button
                type='secondary'
                htmlType='submit'
                className='login-form-button'
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default SignupModal;
