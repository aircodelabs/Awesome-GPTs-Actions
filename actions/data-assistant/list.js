// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const db = aircode.db;

function parseValueOp(op, v) {
  if(/^[><]/.test(v)) {
    let [kk, vv] = v.split(/\s+/g);
    vv = Number(vv);
    if(kk === '>') return op.gt(vv);
    if(kk === '>=') return op.gte(vv);
    if(kk === '<') return op.lt(vv);
    if(kk === '<=') return op.lte(vv);
  }
  return v;
}

function buildCond(condition) {
  let cond = {};
  for(const [k, v] of Object.entries(condition)) {
    if(k === '$or') {
      cond = db.or(...v.map(c => buildCond(c)));
    } else {
      if(Array.isArray(v)) {
        if(/^[><]/.test(v[0])) {
          cond[k] = v.reduce((op, v) => {
            return parseValueOp(op, v);
          }, db);
        } else {
          cond[k] = db.in(v);
        }
      } else {
        if(v.startsWith('regex:')) {
          cond[k] = db.regex(v.replace(/^regex\:/, ''));
        } else {
          cond[k] = parseValueOp(db, v);
        }
      }
    }
  }
  console.log(cond);
  return cond;
}

module.exports = async function (params, context) {
  let {table: id, condition, order} = params;
  console.log('params', params);

  condition = condition ? JSON.parse(condition) : {};
  order = order ? JSON.parse(order) : {};

  const cond = buildCond(condition);

  const table = db.table(id);
  const res = await table.where(cond).sort(order).find();

  console.log(res);
  
  return {
    success: 'ok',
    result: res,
  };
};
