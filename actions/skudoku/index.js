// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

const endpoint = 'http://apis.juhe.cn/fapig/sudoku/generate';
const key = process.env.KEY;

module.exports = async function (params, context) {
  console.log('Received params:', params);
  const difficulty = params.difficulty || 'easy';
  const res = await fetch(`${endpoint}?key=${key}&difficulty=${difficulty}`);
  const data = await res.json();
  return data;
}
