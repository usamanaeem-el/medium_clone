import './App.css';
import Blogs from './component/BlogPage/Blogs';
import TrendingCard from './component/Content/TrendingCard';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <Navbar />
      <Hero />
      <TrendingCard/>
      <Blogs/>
    </div>
  );
}

export default App;
