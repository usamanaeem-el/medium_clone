import React from 'react';

const Discover = () => {
  return (
    <div className='p-4 md:ml-16'>
      <p className='uppercase text-sm font-sm font-sans leading-3 mb-4'>
        Discover more of what matters to you
      </p>
      <div className='grid grid-cols-3 gap:2 md:grid-cols-3 md:gap-2'>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>
            Programming
          </span>
        </div>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>
            Data science
          </span>
        </div>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>
            Technology
          </span>
        </div>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>Sports</span>
        </div>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>Writing</span>
        </div>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>
            Relatioships
          </span>
        </div>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>
            Data science
          </span>
        </div>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>
            Productivity
          </span>
        </div>
        <div className='border-2 border-borderColor rounded flex items-center justify-center'>
          <span className='text-gray font-sans text-sm leading-5'>
            Plolitics
          </span>
        </div>
      </div>
    </div>
  );
};

export default Discover;
