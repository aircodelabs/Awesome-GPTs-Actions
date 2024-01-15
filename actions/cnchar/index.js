// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const cnchar = require('cnchar');

module.exports = async function (params, context) {
  console.log('Received params:', params);
  const poly = require('cnchar-poly');
  const order = require('cnchar-order');
  const draw = require('./draw');
  cnchar.use(poly, order);
  const cc = params.char;
  const res = cnchar.stroke(cc, 'order', 'detail');

  const images = await draw(cc);

  const strokes = [];

  for(let i = 0; i < res[0].length; i++) {
    strokes[i] = {...res[0][i]};
    strokes[i].strokeImage = images[i].url;
  }

  return strokes;
};
