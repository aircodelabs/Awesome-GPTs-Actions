// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

const endpoint = 'https://apis.juhe.cn/fapigw/naming/query';
const key = process.env.KEY;

module.exports = async function (params, context) {
  console.log('Received params:', params);
  const {surname, gender} = params;

  const res = await fetch(`${endpoint}?key=${key}&surname=${surname}&sex=${gender}`);
  const data = await res.json();
  if(data.result?.data) {
    data.result.data = data.result.data.map(d => {
      d.tag = d.tag.replace(/,(70|80|90)后/, '');
      return d;
    });
  }
  return data;
};
