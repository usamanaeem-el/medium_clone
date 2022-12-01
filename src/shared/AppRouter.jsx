import React from 'react'
import Blogs from '../component/BlogPage/Blogs';
import TrendingCard from '../component/Content/TrendingCard';
import Discover from '../component/Discover/Discover';
import Hero from '../component/Hero/Hero';
function AppRouter() {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <Hero/>
      <TrendingCard />
      <div className='lg:flex pt-14'>
        <Blogs />
        <Discover />
      </div>
    </div>
  );
}

export default AppRouter;
