const p = require('path')

module.exports = {
  hyperdriveSchemaPath: p.join(__dirname, 'schemas', 'hyperdrive.proto'),
  daemonSchemaPaths: p.join(__dirname, 'schemas', 'daemon'),
  messages: require('./lib/messages')
}
