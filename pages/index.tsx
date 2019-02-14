import React from 'react';
// import styled from 'styled-components'
import Link from 'next/link';

export type HelloProps = { button?: string };
export const Hello: React.FC<HelloProps> = ({ button }) => {
  // console.log({ button });
  const [state, setState] = React.useState('');

  return (
    <div>
      <p>hi </p>
      {state}
      {/* <button
        onClick={() =>
          fetch('/.netlify/functions/pingapi')
            .then(res => res.json())
            .then(x => void console.log(x) || setState(x.message))
        }
      >
        {' '}
        sldkj
      </button> */}
      <Link href="/potato">
        <a>go to potato</a>
      </Link>{' '}
    </div>
  );
};

export default Hello;
