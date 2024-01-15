// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import divine from './lib/api';

const css = `@font-face{font-family:'web_ixingpan';src:url('https://aircode-yvo.b-cdn.net/resource/ixingpan-fde2h0w05c.eot');src:url('https://aircode-yvo.b-cdn.net/resource/ixingpan-r3cwia9hwkf.woff') format('woff'),url('http://xingpan.vip/demo/static/fonts/ixingpan.ttf') format('truetype'),url('http://xingpan.vip/demo/static/fonts/ixingpan.svg') format('svg');font-weight:normal;font-style:normal;}@font-face{font-family:'web_ixingpan_cn';src:url('https://aircode-yvo.b-cdn.net/resource/ixingpan-fde2h0w05c.eot');src:url('https://aircode-yvo.b-cdn.net/resource/ixingpan-r3cwia9hwkf.woff') format('woff'),url('http://xingpan.vip/demo/static/fonts/ixingpancn.ttf') format('truetype'),url('http://xingpan.vip/demo/static/fonts/ixingpancn.svg') format('svg');font-weight:normal;font-style:normal;}@media screen and (min-width:680px ){.box-svg{width:600px;height:600px;margin:0 auto;}}@media screen and (max-width:680px ){.box-svg{width:100%;height:100%;margin:0 auto;}}text{text-anchor:middle;dominant-baseline:middle;cursor:pointer;}.text_font{font-family:'web_ixingpan_cn';}.must_symbo_font{font-family:'web_ixingpan';}.red{color:red;}#chartbody #zodiac{fill:#f8f8c1;stroke:#b58c00;stroke-width:2;}#chartbody #zodiac_min{fill:#EFF;stroke:#b58c00;stroke-width:2;}#chartbody #hcircle{fill:white;stroke:#2279ab;stroke-width:1;}#chartbody #hcircle_min{fill:white;stroke:#2279ab;stroke-width:1;}#chartbody .origin{stroke:#505050;stroke-width:0.8;}#chartbody .zodiac_grid{stroke:#b58d00;stroke-width:2;}#chartbody .origin:hover{fill:#CCF;}#chartbody .house_grid{stroke:#6699CC;fill:none;stroke-width:0.5;stroke-dasharray:2,1;}#chartbody .house_dark_grid{stroke:#2279ab;stroke-width:1;}#chartbody .house_dark_grid_attribute{stroke:#2279ab;stroke-width:2;}#chartbody .house_id{font-size:16px;stroke-width:1;}#chartbody .house_id:hover{line-height:1;font-size:20px;}.longitude__font{font-size:10px;stroke:none;fill:#000;}.longitude__font{font-size:10px;stroke:none;fill:#000;}.house_1,.house_5,.house_9{fill:red;color:red;}.house_2,.house_6,.house_10{fill:#CC9933;color:#CC9933;}.house_3,.house_7,.house_11{fill:#006633;color:#006633;}.house_4,.house_8,.house_12{fill:#0A0AFF;color:#0A0AFF;}.sign_font{font-size:26px;}.sign_font:hover{font-size:28px;}.sign_Aries,.sign_Leo,.sign_Sagittarius{stroke:none;fill:red;color:red;}.sign_Taurus,.sign_Virgo,.sign_Capricorn{stroke:none;fill:#CC9933;color:#CC9933;}.sign_Gemini,.sign_Libra,.sign_Aquarius{stroke:none;fill:#006633;color:#006633;}.sign_Cancer,.sign_Scorpio,.sign_Pisces{stroke:none;fill:#0A0AFF;color:#0A0AFF;}.senior_sign_font{font-size:20px!important;}.senior_sign_font:hover{font-size:22px!important;}.guardian_font{font-size:16px;}.guardian_font:hover{font-size:20px;}.planet_font{font-size:14px;line-height:1;stroke:none;}.planet_font:hover{font-size:16px;}.planet_font2{font-size:14px;line-height:1;stroke:none;}.planet_font2:hover{font-size:16px;}.planets_Sun,.planets_Ascendant,.planets_Jupiter,.planets_Mars{fill:red;color:red;stroke:none;}.planets_Moon,.planets_IC,.planets_Neptune,.planets_Pluto{fill:#0A0AFF;color:#0A0AFF;stroke:none;}.planets_Saturn,.planets_Venus,.planets_MC{fill:#CC9933;color:#CC9933;stroke:none;}.planets_Mercury,.planets_Des,.planets_Uranus{stroke:none;fill:#006633;color:#006633;}.planets_Chiron,.planets_Pholus,.planets_Ceres,.planets_Pallas,.planets_Juno,.planets_Vesta,.planets_Psyche,.planets_Eros{fill:#FF33FF;color:#FF33FF;stroke:none;}.planets_Cupido,.planets_Hades,.planets_Zeus,.planets_Kronos,.planets_Apollon,.planets_Admetos,.planets_Vulcanus,.planets_Poseidon{fill:#AC00AC;color:#AC00AC;stroke:none;}.planets_oscApogee,.planets_meanApogee,.planets_trueNode,.planets_meanNode,.planets_TrueSouthNode,.planets_MeanSouthNode,.planets_equatAsc,.planets_Sun-Moon,.planets_PartOfFortune,.planets_Vertex{fill:#00B8B8;color:#00B8B8;stroke:none;}.planet_sign_line_0{stroke:#7f7f00;fill:#7f7f00;}.planet_sign_line_60{stroke:#00B8B8;fill:#00B8B8;}.planet_sign_line_90{stroke:red;fill:red;}.planet_sign_line_120{stroke:#006633;fill:#006633;}.planet_sign_line_180{stroke:blue;fill:blue;}.planet_sign_line_30,.planet_sign_line_150{stroke:#ff00ff;fill:#ff00ff;}.planet_sign_line_36,.planet_sign_line_72,.planet_sign_line_144{stroke:#404040;fill:#404040;}.planet_sign_line_45,.planet_sign_line_135{stroke:#7f7f00;fill:#7f7f00;}.planets_circle:hover{r:2;}.planet_sign_line:hover{stroke-width:2 !important;stroke-dasharray:none !important;}#tip_sign_add{position:absolute;z-index:9999;padding:10px;border:1px solid #F1D031;background-color:#FFFFA3;color:#555;font-size:14px;line-height:1.5;display:none;}.switch_web_ixingpan{color:#0A0AFF;}.senior_planet_deg{font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;fill:black;font-size:16px;}.senior_planet_min{font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu;fill:#999999;font-size:12px;}.senior_planet_font{font-size:24px;line-height:1;stroke:none;}.senior_planet_font:hover{font-size:28px;}.senior_house_sign_r{stroke:none;fill:#f73030;font-size:24px;}`;

export default async function (params, context) {
  console.log('Received params:', params);
  const {birthday, latitude, longitude, tz} = params;
  const res = await divine(birthday, latitude, longitude, tz);
  let svg = res.data?.svg;
  let image = null;
  if(svg) {
    // todo
    svg = svg.replace('id="chart">', `id="chart"><style>${css}</style>`);
    // console.log(svg);
    const uploaded = await aircode.files.upload(svg, `${Math.random().toString(36).slice(2, 10)}.svg`, {
      type: 'image/svg+xml',
    });
    delete res.data?.svg;
    if(res.data) {
      image = uploaded.url;
    }
  }
  return {
    image,
    ...res.data,
  };
};
