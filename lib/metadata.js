export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Logic Agency Inc.',
  alternateName: 'Logic Inc.',
  url: 'https://www.logicagencyinc.com',
  description: 'Outsourced retail packaging and supply chain operations team on monthly retainer for brands in beauty, wellness, CPG, and tech wearables.',
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
    telephone: '+1-385-368-6837',
    email: 'jordan@logicagencyinc.com',
    contactType: 'sales',
  },
  sameAs: [
    'https://www.linkedin.com/company/logicagency',
  ],
  areaServed: 'US',
  knowsAbout: [
    'supply chain operations',
    'packaging sourcing',
    'retail compliance',
    'CPG operations',
    'beauty brand operations',
    'fractional supply chain management',
  ],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Logic Agency Inc.',
  url: 'https://www.logicagencyinc.com',
  publisher: {
    '@type': 'Organization',
    name: 'Logic Agency Inc.',
  },
};
