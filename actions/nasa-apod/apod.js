// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

const api_key = '7SC2uXUpqpLKaXrA0YvIE7b9fegaBF3VEFHoAacx';

module.exports = async function (params, context) {
  console.log('Received params:', params);
  const date = params.date;
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`);
  return await res.json();
};
