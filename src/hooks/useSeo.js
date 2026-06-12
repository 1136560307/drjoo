import { useEffect } from 'react';
import { metaMap } from '../data/siteData';

export function useSeo(pathname, override = {}) {
  useEffect(() => {
    const meta = { ...(metaMap[pathname] || metaMap['/']), ...override };
    document.title = meta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', meta.description || '俏博士 DR.JOO 白发脱发护理与头皮养护品牌官网');
  }, [pathname, override.title, override.description]);
}
