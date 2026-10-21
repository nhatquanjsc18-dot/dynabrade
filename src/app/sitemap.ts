import type { MetadataRoute } from 'next';
import { getAllProducts } from '../lib/data';

export const dynamic = 'force-static';

const BASE = 'https://dynabrade.nhatquan.vn';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/nha-phan-phoi/', '/san-pham/', '/bao-hanh/', '/lich-su-dynabrade/', '/lien-he/'].map(
    (p) => ({ url: BASE + p })
  );
  const products = getAllProducts().map((p) => ({ url: `${BASE}/san-pham/${p.slug}/` }));
  return [...pages, ...products];
}
