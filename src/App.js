import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Membership from './component/Membership/Membership';
import AppRouter from './shared/AppRouter';
Amplify.configure(awsconfig);
function App() {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-auto'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppRouter />} />
          <Route path='/membership' element={<Membership />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
