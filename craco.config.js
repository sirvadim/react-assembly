const path = require('path')
console.log('!!!!!!!!!!!!')
module.exports = {
  webpack: {
    alias: {
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
}
