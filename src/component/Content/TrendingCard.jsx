import { faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './trending.css';
const TrendingCard = () => {
  return (
    <>
      <div className='h-5/6 md:h-2/6 px-8 md:px-12 xl:px-60 mt-8'>
        <div className='flex items-center mb-4'>
          <FontAwesomeIcon icon={faArrowTrendUp} className='mr-4' />
          <h1 className='tracking-wider leading-4 text-sm font-bold'>
            TRENDING ON MEDIUM
          </h1>
        </div>
        <div className='grid grid-cols-1 gap:2 md:grid-cols-3 md:gap-4'>
          <div className='flex'>
            <div className='num'>01</div>
            <div className='content p-1 ml-2'>
              <h1>Matt Welsh</h1>
              <p>Using Rust at a startup: A cautionary tale</p>
              <span>Nov 23</span>
            </div>
          </div>
          <div className='flex'>
            <div className='num'>02</div>
            <div className='content p-1 ml-2'>
              <h1>Frank Andrade</h1>
              <p>
                Predicting The FIFA World Cup 2022 With a Simple Model using
                Python
              </p>
              <span>Nov 23</span>
            </div>
          </div>
          <div className='flex'>
            <div className='num'>03</div>
            <div className='content p-1 ml-2'>
              <h1>Minko Gechev in Angular Blog</h1>
              <p>Ukraine War, 26 November 2022</p>
              <span>Nov 23</span>
            </div>
          </div>
          <div className='flex'>
            <div className='num'>04</div>
            <div className='content p-1 ml-2'>
              <h1>Matt Welsh</h1>
              <p>Angular v15 is now available!</p>
              <span>Nov 23</span>
            </div>
          </div>
          <div className='flex'>
            <div className='num'>05</div>
            <div className='content p-1 ml-2'>
              <h1>Arthur Hayes</h1>
              <p>White Man</p>
              <span>Nov 23</span>
            </div>
          </div>
          <div className='flex'>
            <div className='num'>06</div>
            <div className='content p-1 ml-2'>
              <h1>Tina Golub in UX Collective</h1>
              <p>
                Down the wrong path: the disaster of the latest Duolingo UI
                update
              </p>
              <span>Nov 23</span>
            </div>
          </div>
        </div>
      </div>
      <hr className='border-lightGray'></hr>
    </>
  );
};

export default TrendingCard;
