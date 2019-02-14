import React from 'react';
// import styled from 'styled-components'
import Link from 'next/link';

export type HelloProps = { button?: string };
export const Hello: React.FC<HelloProps> = ({ button }) => {
  console.log({ button });
  return (
    <div>
      <p>hi potato</p>
      <Link href="/">
        <a>go to index</a>
      </Link>{' '}
    </div>
  );
};

export default Hello;
