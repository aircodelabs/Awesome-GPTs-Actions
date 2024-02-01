const aircode = require('aircode');
const cnchar = require('cnchar');

module.exports = async function (text) {
  require('jsdom-global')();
  document.body.innerHTML = '<div id="drawStroke"></div>';

  const draw = require('cnchar-draw');
  cnchar.use(draw);
  
  await new Promise((resolve) => {
    cnchar.draw(text,{
      el: '#drawStroke',
      type: cnchar.draw.TYPE.STROKE,
      // type: cnchar.draw.TYPE.ANIMATION,
      // animation:{
      //     loopAnimate: true
      // },
      onComplete: () => {
        // console.log('complete');
        resolve();
      },
    });
  });

  const svgs = [...document.querySelectorAll('svg')];
  const res = svgs.map(async (svg) => {
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    return await aircode.files.upload(svg.outerHTML, `${Math.random().toString(36).slice(2, 8)}.svg`, {
    type: 'image/svg+xml',
  })});

  return await Promise.all(res);
};
