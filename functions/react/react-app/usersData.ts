import fetch from 'isomorphic-fetch';

export default function Data() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(x => void console.log('xxx', x) || x);
}
