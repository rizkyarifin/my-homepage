const path = require('path');
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  output: { path: path.resolve(__dirname, 'static'), },
}
