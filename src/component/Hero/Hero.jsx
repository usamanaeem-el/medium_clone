import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <>
      <hr className='border-black'></hr>
      <div className='h-3/6  bg-yellow  px-8 md:px-12 xl:px-60'>
        <h2 className='pt-24'>Stay curious.</h2>
        <h3 className='py-8'>
          Discover stories, thinking, and expertise
          <br /> from writers on any topic.
        </h3>
        <button className='text-textWhite px-12 rounded-full bg-pureBlack h-10 font-normal text-lg'>
          Start reading
        </button>
      </div>
    </>
  );
};

export default Hero;
