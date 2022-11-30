import './App.css';
import Blogs from './component/BlogPage/Blogs';
import TrendingCard from './component/Content/TrendingCard';
import Discover from './component/Discover/Discover';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <Navbar />
      <Hero />
      <TrendingCard />
      <div className='lg:flex pt-14'>
        <Blogs />
        <Discover />
      </div>
    </div>
  );
}

export default App;
