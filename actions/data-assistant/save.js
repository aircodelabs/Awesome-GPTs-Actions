// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const db = aircode.db;

module.exports = async function (params, context) {
  let {table: id, data} = params;
  console.log('params', params);

  data = JSON.parse(data);
  if(!Array.isArray(data)) {
    data = [data];
  }
  const table = db.table(id);

  let res = [];
  for(let i = 0; i < data.length; i += 50) {
    const records = data.slice(i, i + 50);
    res.push(await table.save(data));
  }
  
  return {
    success: 'ok',
    result: res,
  };
};
