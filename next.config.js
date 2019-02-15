// next.config.js
const withTypescript = require('@zeit/next-typescript');

// const output = {};
const output = withTypescript({
  webpack(config, options) {
    return config;
  }
});

console.log('build', process.env.BUILD);
if (process.env.BUILD === 'serverless') {
  output.target = 'serverless';
}
output.exportPathMap = async function(defaultPathMap) {
  return {
    '/': { page: '/' }
  };
};

module.exports = output;
