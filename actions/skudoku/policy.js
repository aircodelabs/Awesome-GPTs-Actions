// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const fs = require('node:fs');

module.exports = async function (params, context) {
  const data = fs.readFileSync('./privacy-policy.md', 'utf8');
  return data;
};

