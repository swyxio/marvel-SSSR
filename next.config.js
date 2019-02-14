// next.config.js
const withTypescript = require('@zeit/next-typescript');

const output = withTypescript({
  webpack(config, options) {
    return config;
  }
});

output.target = 'serverless';

module.exports = output;
