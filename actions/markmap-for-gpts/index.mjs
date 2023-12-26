import aircode from 'aircode';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import { JSDOM } from 'jsdom';
import pixelWidth from 'string-pixel-width';

const width = 800;
const height = 600;

const dom = new JSDOM('<!DOCTYPE html><body></body>');

globalThis.Node = dom.window.Node;
globalThis.document = dom.window.document;
globalThis.navigator = dom.window.navigator;
globalThis.SVGElement = dom.window.SVGElement;

dom.window.HTMLElement.prototype.getBoundingClientRect = function() {
  const width = 2 * pixelWidth(this.textContent, { size: 16 });
  return {
    x: 0,
    y: 0,
    left: width,
    right: 18,
    top: 0,
    bottom: 0,
    width,
    height: 18,
  };
};

SVGElement.prototype.getBoundingClientRect = () => {
  return {
    x: 0,
    y: 0,
    left: width,
    right: height,
    top: 0,
    bottom: 0,
    width,
    height,
  };
};
SVGElement.prototype.width = {
  baseVal: {
    value: width,
  },
};
SVGElement.prototype.height = {
  baseVal: {
    value: height,
  },
};

Markmap.prototype.transition = (t) => t;

export default async function (params, context) {
  const markdown = params.markdown;
  const transformer = new Transformer();
  
  const { root } = transformer.transform(markdown);

  document.body.innerHTML = `<svg id="markmap" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="font-size: 0.75em"></svg>`;

  const res = Markmap.create('#markmap', null, root); 

  const file = await aircode.files.upload(
    document.body.innerHTML.replace('.markmap{font:300 16px/20px sans-serif}', '.markmap{font:300 16px/20px system-ui}'), 
    `${Math.random().toString(32).slice(2, 10)}.svg`,
    {
      type: 'image/svg+xml',   // MIME type
    }
  );

  return {image: file.url};
};
