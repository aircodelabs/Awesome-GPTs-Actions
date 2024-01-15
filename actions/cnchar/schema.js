// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const fs = require('node:fs');

module.exports = async function (params, context) {
  const data = fs.readFileSync('./schema.json', 'utf8');
  const ret = JSON.parse(data);
  ret.servers[0].url = `https://${context.request.host}`;
  return ret;
};
