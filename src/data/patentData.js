const patentFirstPageSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 877">
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fffdf7"/>
      <stop offset="1" stop-color="#f7efe2"/>
    </linearGradient>
    <filter id="soft" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#6f2c17" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect width="620" height="877" rx="18" fill="url(#paper)"/>
  <rect x="54" y="54" width="512" height="770" rx="2" fill="none" stroke="#b41d1a" stroke-width="3"/>
  <rect x="66" y="66" width="488" height="746" rx="2" fill="none" stroke="#d8a9a3" stroke-width="1"/>
  <text x="86" y="120" fill="#222" font-size="16" font-family="serif">证书号 第 4427145 号</text>
  <circle cx="310" cy="155" r="36" fill="#f7f7f7" stroke="#d8d8d8"/>
  <text x="310" y="166" text-anchor="middle" fill="#1f57a4" font-size="42" font-weight="700" font-family="serif">IP</text>
  <text x="310" y="235" text-anchor="middle" fill="#111" font-size="38" letter-spacing="16" font-family="serif">发明专利证书</text>
  <text x="86" y="315" fill="#333" font-size="17" font-family="serif">发明名称：一种银耳多糖及其制备方法和应用</text>
  <text x="86" y="365" fill="#333" font-size="17" font-family="serif">发 明 人：陈云波</text>
  <text x="86" y="415" fill="#333" font-size="17" font-family="serif">专 利 号：ZL 2020 1 0948173.1</text>
  <text x="86" y="465" fill="#333" font-size="17" font-family="serif">专利申请日：2020 年 09 月 10 日</text>
  <text x="86" y="515" fill="#333" font-size="17" font-family="serif">专 利 权 人：广州善合化工有限公司</text>
  <text x="86" y="565" fill="#333" font-size="17" font-family="serif">授权公告日：2021 年 05 月 18 日</text>
  <text x="335" y="565" fill="#333" font-size="17" font-family="serif">授权公告号：CN 112029006 B</text>
  <path d="M118 628h145" stroke="#111" stroke-width="11" stroke-dasharray="2 3"/>
  <text x="86" y="695" fill="#222" font-size="17" font-family="serif">局长</text>
  <text x="86" y="725" fill="#222" font-size="17" font-family="serif">申长雨</text>
  <text x="265" y="710" fill="#111" font-size="58" font-family="cursive" transform="rotate(-8 265 710)">申长雨</text>
  <circle cx="450" cy="700" r="58" fill="none" stroke="#d51d12" stroke-width="8" filter="url(#soft)"/>
  <circle cx="450" cy="700" r="42" fill="none" stroke="#d51d12" stroke-width="2"/>
  <text x="450" y="693" text-anchor="middle" fill="#d51d12" font-size="15" font-weight="700">国家知识产权局</text>
  <text x="310" y="810" text-anchor="middle" fill="#333" font-size="14" font-family="serif">第 1 页（共 2 页）</text>
</svg>`;

export const patentCarouselItems = [
  {
    title: '银耳多糖发明专利证书',
    tag: '发明专利',
    spec: '专利第一页',
    image: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(patentFirstPageSvg)}`,
  },
];
