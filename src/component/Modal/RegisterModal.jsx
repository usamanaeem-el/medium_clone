import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './registerModal.css';
const RegisterModal = () => {
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
  return (
    <>
      <button onClick={showModal}>
        Register
      </button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-serif font-normal mt-9'>Join Medium</h2>
          <h3 className='w-40 border border-modalBorderColor rounded-xl font-serif text-sm text-center mt-9 p-1 cursor-pointer'>
            Sign up with Google
          </h3>
          <h3 className='w-40 border border-modalBorderColor rounded-xl font-serif text-sm text-center mt-4 p-1 cursor-pointer'>
            Sign up with Facebook
          </h3>
          <h3 className='w-40 border border-modalBorderColor rounded-xl font-serif text-sm text-center mt-4 p-1 cursor-pointer'>
            Sign up with email
          </h3>
          <div className='flex mt-12'>
            <p>Already have an account?</p>
            <button>Sign in</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default RegisterModal;
