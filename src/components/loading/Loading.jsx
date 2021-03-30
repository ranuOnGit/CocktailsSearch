import React from 'react';
import './Loading.css';
import { VscLoading } from 'react-icons/vsc';

const Loading = () => {
  return (
    <div>
      <div className='loading-div'>
        <VscLoading size='15rem' />
      </div>
    </div>
  );
};

export default Loading;
