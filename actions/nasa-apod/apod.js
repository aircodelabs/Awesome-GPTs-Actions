// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

const api_key = process.env.api_key;

module.exports = async function (params, context) {
  console.log('Received params:', params);
  const date = params.date;
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`);
  return await res.json();
};
