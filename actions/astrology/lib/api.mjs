// https://api.xingpan.vip/index/index/docs.html

const apiUrl = 'https://www.xingpan.vip/astrology/chart/natal';
const access_token = process.env.access_token;

export default async function (birthday, latitude, longitude, tz) {
  const body = {
    access_token,
    h_sys: 'k',
    longitude: Number(longitude),
    latitude: Number(latitude),
    birthday,
    tz: Number(tz.replace(/^UTC/, '')),
    planets: ['0','1','2','3','4','5','6', '7', '8', '9', 't', 'm'],
    virtual: ['21'],
    phase: {'0':8, '60':3, '90':7, '120':5, '150':2, '180':7},
    ay: -1,
    // svg_type: 1,
  };
  console.log(JSON.stringify(body));
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
};
