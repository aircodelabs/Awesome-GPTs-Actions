// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import { serialize } from 'v8';
import { pakoSerde } from './lib/serde.mjs';

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
