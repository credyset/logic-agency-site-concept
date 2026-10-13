import './globals.css';
import { organizationJsonLd, websiteJsonLd } from '@/lib/metadata';

export const metadata = {
  title: {
    default: 'Logic Agency Inc. — Embedded Packaging, Supply Chain & Operations',
    template: '%s',
  },
  description: 'The embedded packaging, supply-chain, and operations team for founders scaling physical-product brands. Logic finds and fixes the operational causes behind margin, cost, and quality problems.',
  metadataBase: new URL('https://credyset.github.io'),
  alternates: { canonical: 'https://credyset.github.io/logic-agency-site-concept/' },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  openGraph: {
    type: 'website',
    title: 'Logic Agency Inc. — Embedded Packaging, Supply Chain & Operations',
    description: 'One accountable team for founders scaling physical-product brands through margin, cost, and quality pressure.',
    url: 'https://credyset.github.io/logic-agency-site-concept/',
    siteName: 'Logic Agency Inc.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Agency Inc. — Embedded Packaging, Supply Chain & Operations',
    description: 'One accountable packaging, supply-chain, and operations team for scaling physical-product brands.',
  },
  icons: {
    icon: [
      { url: '/logic-agency-site-concept/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/logic-agency-site-concept/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <noscript><style>{'.fd{opacity:1!important;transform:none!important}'}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
