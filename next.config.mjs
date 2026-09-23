/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'logicagencyinc.com' }],
        destination: 'https://www.logicagencyinc.com/:path*',
        permanent: true,
      },
      {
        source: '/blog/what-fractional-operations-team-does',
        destination: '/blog/fractional-supply-chain-operations',
        permanent: true,
      },
      {
        source: '/blog/when-to-hire-vp-operations-cpg',
        destination: '/blog/fractional-coo-vs-full-time-hire',
        permanent: true,
      },
      {
        source: '/blog/retail-readiness-checklist-cpg',
        destination: '/blog/dtc-to-retail-transition-checklist',
        permanent: true,
      },
      {
        source: '/blog/retail-chargebacks-cpg-brands',
        destination: '/blog/retail-chargebacks-prevention-guide',
        permanent: true,
      },
      {
        source: '/blog/outgrowing-first-manufacturer',
        destination: '/blog/supplier-transition-strategy-scaling-brands',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
