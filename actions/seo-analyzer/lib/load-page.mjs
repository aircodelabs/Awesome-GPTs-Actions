export default async function getPageContent(reqUrl) {
  const url = new URL(reqUrl);
  const robotUrl = `${url.origin}/robots.txt`;
  const robotRes = await fetch(robotUrl);
  let robots = 'No robots.txt found';
  if(robotRes.status >= 200 && robotRes.status < 400) {
    robots = await robotRes.text();
  }

  const nowTime = Date.now();
  const res = await fetch(reqUrl);
  const ret = {
    status: res.status,
    robots,
    loadTime: `${Date.now() - nowTime}ms`,
  }
  if(res.status >= 200 && res.status < 400) {
    ret.content = await res.text();
  }
  return ret;
}
