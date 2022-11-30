/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      'https://newsapi.org/v2/everything?q=apple&from=2022-11-27&to=2022-11-27&sortBy=popularity&apiKey=c5bf978537d54cbfb5a9c0cd6b1d71b8',
      {
        headers: { Authorization: `token ${process.env.access_token}` },
      }
    );
    let data = await response.json();
    return setData(data.articles);
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='h-5/6 md:h-2/6 px-8 md:px-12 xl:px-60 w-3/5'>
      {data.map((item) => (
        <div className='flex mb-6'>
          <div className='content p-1 ml-2 min-w-full'>
            <h4 className='max-h-4 text-sm font-sans text-black text-ellipsis overflow-hidden ...'>
              {item.author}
            </h4>
            <h2 className='max-h-14 leading-7 text-xl font-medium text-black font-sans text-ellipsis overflow-hidden ...'>
              {item.title}
            </h2>
            <h3 className='max-h-10 text-gray text-sm leading-5 font-normal font-sans text-ellipsis overflow-hidden ...'>
              {item.description}
            </h3>
            <span className='text-gray text-sm font-normal'>
              {item.publishedAt}
            </span>
          </div>
          <img
            src={item.urlToImage}
            width='250'
            object-fit= 'cover'
            height='134'
            loading='lazy'
            className='ml-5'
          />
        </div>
      ))}
    </div>
  );
};

export default Blogs;
