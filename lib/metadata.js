export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Logic Agency Inc.',
  alternateName: 'Logic Inc.',
  url: 'https://www.logicagencyinc.com',
  description: 'Embedded packaging, supply-chain, and operations team for founders scaling physical-product brands, with hands-on implementation across product development, manufacturing, quality, and coordinated logistics.',
  foundingDate: '2020',
  founder: {
    '@type': 'Person',
    name: 'Jordan Harper',
    jobTitle: 'Founder & CEO',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orange County',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'jordan@logicagencyinc.com',
    contactType: 'sales',
  },
  sameAs: [
    'https://www.linkedin.com/company/logicagency',
  ],
  areaServed: 'US',
  knowsAbout: [
    'product and packaging development',
    'manufacturing and quality',
    'supply chain operations',
    'supplier sourcing and qualification',
    'retail readiness',
    'embedded operations management',
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Logic Agency Inc.',
  url: 'https://credyset.github.io/logic-agency-site-concept/',
  publisher: {
    '@type': 'Organization',
    name: 'Logic Agency Inc.',
  },
};
