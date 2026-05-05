const canonicalUrl = (
  process.env.SITE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  'http://localhost:3000'
).replace(/\/$/, '');

const metaImage = `${canonicalUrl}/images/background.svg`;
const metaDescription =
  'Ting Chi Chen — fully remote architectural project manager & BIM/3D engineer (CU Boulder BArch), based in Taipei, Taiwan. Deep U.S. experience across multifamily, commercial, education, and custom residential projects.';

const defaultSEOConfig = {
  defaultTitle: 'Ting Chi Chen — Portfolio',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Ting Chi Chen — Portfolio',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'Ting Chi Chen portfolio',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'Ting Chi Chen portfolio',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'Ting Chi Chen portfolio',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'Ting Chi Chen',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

module.exports = defaultSEOConfig;
