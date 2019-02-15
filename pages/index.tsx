import React from 'react';
// import styled from 'styled-components'
// import Link from 'next/link';

export type HelloProps = { button?: string };
export const Hello: React.FC<HelloProps> = ({ button }) => {
  // console.log({ button });
  const [state, setState] = React.useState('');

  return (
    <div>
      <p>hi </p>
      {state}
      <button
        onClick={() =>
          fetch('/.netlify/functions/pingapi')
            .then(res => res.json())
            .then(x => void console.log(x) || setState(x.message))
        }
      >
        {' '}
        ping API
      </button>
      <a href="/viewTweet?tweetId=1096094647716335617">
        <a>go to view tweet</a>
      </a>{' '}
    </div>
  );
};

export default Hello;
