const p = require('path')

module.exports = {
  schema: p.join(__dirname, 'schema.proto'),
  messages: require('./lib/messages')
}
