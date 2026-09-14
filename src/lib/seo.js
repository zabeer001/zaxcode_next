export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://zaxcode.com').replace(/\/$/, '');

export const siteName = 'Zaxcode';
export const defaultDescription = 'Zaxcode builds fast websites, SaaS products, ERP systems, and digital experiences for growing businesses in Bangladesh and worldwide.';
export const defaultSocialImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Zaxcode — web development, SaaS, ERP, and digital products',
};

export function pageMetadata({ title, description, path, type = 'website' }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      siteName,
      locale: 'en_BD',
      title,
      description,
      url: path,
      images: [defaultSocialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [defaultSocialImage.url],
    },
  };
}

export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
