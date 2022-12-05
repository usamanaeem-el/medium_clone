import React, { useState } from 'react';
import { Modal, Select } from 'antd';
import './registerModal.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { API, Auth } from 'aws-amplify';
import * as mutations from '../.././graphql/mutations';
// import {
//   CognitoIdentityProviderClient,
//   AdminAddUserToGroupCommand,
// } from '@aws-sdk/client-cognito-identity-provider';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const SignupModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [group, setGroup] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const client = new CognitoIdentityProviderClient({
  //   region: process.env.REACT_APP_AMPLIFY_REGION,
  //   credentials: {
  //     accessKeyId: process.env.REACT_APP_AMPLIFY_PUBLIC_KEY,
  //     secretAccessKey: process.env.REACT_APP_AMPLIFY_SECRET_KEY,
  //   },
  // });

  const onSignUp = async (values) => {
    console.log('Received values of form: ', values);
    //COgnito API to Signup user
    try {
      setConfirm(true);
      const user = await Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: username,
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });
    } catch (error) {
      setConfirm(false);
      console.log('error signing up:', error);
    }

    //Add user details into Dynamo DB
    const userDetails = {
      name: values.name,
      email: values.username,
      address: values.address,
      city: values.city,
      state: values.state,
      group: values.group,
      status: false,
    };
    try {
      const details = await API.graphql({
        query: mutations.createUser,
        variables: { input: userDetails },
      });
      setId(details.data.createUser.id);
      console.log({ details });
    } catch (error) {
      console.log('error storing data', error);
    }
  };
  //Confirmation code
  //Add user to group

  const onConfirmSignup = async (values) => {
    try {
      await Auth.confirmSignUp(values.username, values.code);
      // getting the current session
      const session = await Auth.currentSession();
      console.log('session id is', session);

      // const command = new AdminAddUserToGroupCommand(addRoleParams);
      // await client.send(command);
      // saving the user in localstorage
      window.localStorage.setItem('user', JSON.stringify(session));
    } catch (error) {
      console.log('error confirming sign up', error);
    }
      //dynamo
      const todoDetails = {
        id: id,
        status: true,
      };

      const updatedTodo = await API.graphql({
        query: mutations.updateUser,
        variables: { input: todoDetails },
      });
      console.log('Confirmed true');
      //user to group
      const addRoleParams = {
        GroupName: group,
        Username: username,
        // UserPoolId: userData?.pool?.userPoolId,
      };


    //Update user status into Dynamo DB
  };

  const addToGroup = async () => {
    let apiName = 'AdminQueries';
    let path = '/addUserToGroup';
    let myInit = {
      body: {
        username: username,
        groupname: group,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.post(apiName, path, myInit);
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
                <button onClick={addToGroup}>Add user</button>
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
                  className='sm:rounded-xl'
                  type='text'
                  id='name'
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                  className='sm:rounded-xl'
                  type='email'
                  id='username'
                  placeholder='User Name'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
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
                  className='sm:rounded-xl'
                  id='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
                  className='sm:rounded-xl'
                  id='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
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
                  className='sm:rounded-xl'
                  id='city'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
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
                  className='sm:rounded-xl'
                  id='state'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </Form.Item>
              <Form.Item
                name='group'
                rules={[
                  {
                    required: true,
                    message: 'Please enter your Role!',
                  },
                ]}
              >
                <Select
                  defaultValue='PATIENTS'
                  style={{
                    width: 120,
                  }}
                  placeholder='Group'
                  className='sm:rounded-xl'
                  id='group'
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  required
                  options={[
                    {
                      value: 'CAREGIVERS',
                      label: 'Care Giver',
                    },
                    {
                      value: 'PATIENTS',
                      label: 'Patients',
                    },
                    {
                      value: 'HEALTHWORKER',
                      label: 'Health Worker',
                    },
                  ]}
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
