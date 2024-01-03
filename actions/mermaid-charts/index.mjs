// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import { serialize } from 'v8';
import { pakoSerde } from './lib/serde.mjs';

// const code = `graph TD
//     A[用户输入网址] -->|HTTP请求| B[域名解析]
//     B --> C[服务器处理请求]
//     C -->|返回HTML| D[浏览器接收HTML]
//     D --> E[解析HTML结构]
//     E --> F[加载CSS/JS/图片等资源]
//     F --> G[解析并执行JavaScript]
//     G --> H[构建DOM树]
//     H --> I[构建渲染树]
//     I --> J[布局渲染树]
//     J --> K[绘制网页内容]`;

export default async function (params, context) {
  const {code} = params;
  console.log('code', code);
  const encoded = pakoSerde.serialize(JSON.stringify({
    autoSync: true,
    code,
    editorMode: "code",
    mermaid: JSON.stringify({theme: 'default'}),
    updateDiagram: true,
  }));
  return {
    url: `https://mermaid.ink/img/pako:${encoded}`,
  };
};
