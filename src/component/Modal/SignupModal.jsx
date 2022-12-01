import React, { useState } from 'react';
import { Modal } from 'antd';
import './registerModal.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { API, Auth } from 'aws-amplify';
import * as mutations from '../.././graphql/mutations';
const SignupModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [details, setDetails] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSignUp = async (values) => {
    console.log('Received values of form: ', values);
    try {
      setConfirm(true);
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
      setConfirm(false);
      console.log('error signing up:', error);
    }
    const userDetails = {
      name: values.name,
      email: values.username,
      address: values.address,
      city: values.city,
      state: values.state,
    };
    try {
      const details = await API.graphql({
        query: mutations.createUser,
        variables: { input: userDetails },
      });
    } catch (error) {
      console.log('error storing data', error);
    }
  };

  const onConfirmSignup = async (values) => {
    try {
      await Auth.confirmSignUp(values.username, values.code);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  };

  return (
    <>
      <button onClick={showModal}>Register</button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {confirm ? (
          <div className='flex flex-col items-center justify-center py-20'>
            <h3 className='text-bold font-sans text-gray'>Confirm SignUp</h3>
            <br />
            <Form
              name='normal_login'
              className='login-form'
              labelCol='Log In'
              initialValues={{
                remember: true,
              }}
              onFinish={onConfirmSignup}
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
                name='code'
                rules={[
                  {
                    required: true,
                    message: 'Please enter your confirmation code',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Code'
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type='secondary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Confirm Signup
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : (
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
              onFinish={onSignUp}
            >
              <Form.Item
                name='name'
                rules={[
                  {
                    required: true,
                    message: 'Please enter your name!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Name'
                />
              </Form.Item>

              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Email'
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
                name='address'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Address!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Address'
                />
              </Form.Item>
              <Form.Item
                name='city'
                rules={[
                  {
                    required: true,
                    message: 'Please enter your City!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='City'
                />
              </Form.Item>
              <Form.Item
                name='state'
                rules={[
                  {
                    required: true,
                    message: 'Please enter your State!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='State'
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
        )}
      </Modal>
    </>
  );
};
export default SignupModal;
