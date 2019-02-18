import React from 'react';
// import styled from 'styled-components'
import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';

import Link from 'next/link';

// export type HelloProps = { button?: string };
// export const Hello: React.FC<HelloProps> = ({ button }) => {
//   console.log({ button });
//   return (
//     <div>
//       <p>hi potato</p>
//       <Link href="/">
//         <a>go to index</a>
//       </Link>{' '}
//     </div>
//   );
// };

export type HelloProps = { userAgent?: string; message?: string };
class Hello extends React.Component<HelloProps> {
  static async getInitialProps({ req, query: { tweetId } }) {
    const message = await fetch(`https://twitter.com/statuses/${tweetId}`)
      .then(async res => {
        const text = await res.text();

        const $ = cheerio.load(text);
        // document.querySelectorAll('.permalink-tweet-container .tweet-text')
        const tweetText = $('.permalink-tweet-container .tweet-text').text();
        return tweetText;
      })
      .catch(err => {
        console.error('error occured with loading tweet');
        return 'tweet not found';
      });
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent, message };
  }

  render() {
    return (
      <div>
        Hello World {this.props.userAgent}
        <h3>The tweet you requested</h3>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Hello;
