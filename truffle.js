// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 400000,
      from: '0x96766810132f44d6081eb99eb3a1a1f9dcde2b14'
    }
  }
}
