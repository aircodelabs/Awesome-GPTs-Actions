// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import getPageContent from './lib/load-page';
import Detector from '@quanglight/seo-defects';
import analyzing from './lib/analyzing';

const detector = new Detector("string");

export default async function (params, context) {
  const url = params.url;
  console.log(params);

  const res = await getPageContent(url);
  const content = res.content;

  try {
    detector.proceedScan(content);
    res.prescanResult = detector.outputResult();
  } catch(ex) {
    
  }

  res.analyzedResult = analyzing(content);
  
  delete res.content;
  return res;
};
