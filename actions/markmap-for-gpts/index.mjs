import aircode from 'aircode';
import { Transformer } from 'markmap-lib';
import { Markmap } from 'markmap-view';
import { JSDOM } from 'jsdom';
import pixelWidth from 'string-pixel-width';

const width = 800;
const height = 600;

const dom = new JSDOM(`<!DOCTYPE html><body><svg id="markmap" width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" style="font-size: 0.75em"></svg></body>`);

// const markdown = `
// # A
// ## B
// ### C
// ## D
// - 保持
// - 使用加湿器：在家中或办公室使用加湿器可以增加空气中的湿度，帮助缓解鼻腔干燥。
// - 避免刺激物：避免烟草烟雾、尘埃和其他可能引起刺激的物质，这些都可能加剧鼻炎症状。
// - 清洁鼻腔：使用生理盐水冲洗鼻腔可以帮助保持鼻腔清洁和湿润。
// - 适当休息：保证充足的休息，有助于身体抵抗感染和减轻症状。
// `;

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

  const svgEl = document.querySelector('svg');

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
