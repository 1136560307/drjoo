const base = import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/' ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';

function withBase(value) {
  if (!base || typeof value !== 'string') return value;
  if (!value.startsWith('/assets/')) return value;
  return `${base}${value}`;
}

function fixAssetNode(node) {
  if (!node || node.nodeType !== 1) return;

  if (node.tagName === 'IMG') {
    const src = node.getAttribute('src');
    const fixedSrc = withBase(src);
    if (fixedSrc !== src) node.setAttribute('src', fixedSrc);
  }

  if (node.tagName === 'A' || node.tagName === 'LINK') {
    const href = node.getAttribute('href');
    const fixedHref = withBase(href);
    if (fixedHref !== href) node.setAttribute('href', fixedHref);
  }

  if (node.querySelectorAll) {
    node.querySelectorAll('img[src^="/assets/"],a[href^="/assets/"],link[href^="/assets/"]').forEach(fixAssetNode);
  }
}

export function startAssetPathFix() {
  if (typeof window === 'undefined' || !base) return;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach(fixAssetNode);
      if (mutation.type === 'attributes') fixAssetNode(mutation.target);
    });
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src', 'href'],
  });

  if (document.body) fixAssetNode(document.body);
  window.addEventListener('load', () => fixAssetNode(document.body));
}
