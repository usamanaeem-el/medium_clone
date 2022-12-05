import React from 'react';
import logo from '../../shared/assests/logo.png';
import SigninModal from '../Modal/SigninModal';
import SignupModal from '../Modal/SignupModal';
const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
      <nav className='h-16 flex justify-between bg-yellow items-center px-8 md:px-12 xl:px-60'>
        <div>
          <img className='h-12' src={logo} alt='medium' />
        </div>
        <div className='flex items-center'>
          <ul className='hidden md:flex'>
            <li className='px-3'>Our story</li>
            <li className='px-3'>
              <a href='http://localhost:3000/membership'>Membership</a>
            </li>
            <li className='px-3'>Write</li>
            <li className='px-5'>
              <SigninModal />
            </li>
          </ul>
          <button className='text-textWhite px-5 rounded-full bg-pureBlack h-10'>
            <SignupModal />
          </button>
        </div>
      </nav>
      <hr className='border-black'></hr>
    </div>
  );
};

export default Navbar;
