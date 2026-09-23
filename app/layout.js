import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { organizationJsonLd, websiteJsonLd } from '@/lib/metadata';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-WWFEYSH2M3';

export const metadata = {
  title: {
    default: 'Logic Agency Inc. — Retail Packaging & Supply Chain Ops for Scaling Brands',
    template: '%s',
  },
  description: 'Your outsourced retail packaging and supply chain operations team. Monthly retainers for brands in beauty, wellness, CPG, and tech wearables.',
  metadataBase: new URL('https://www.logicagencyinc.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Logic Agency Inc. — Outsourced Packaging & Supply Chain Ops',
    description: 'Monthly retainer packaging and supply chain operations for brands in beauty, wellness, CPG, and tech wearables. $2,500-$10,000+/month.',
    url: 'https://www.logicagencyinc.com/',
    siteName: 'Logic Agency Inc.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logic Agency Inc. — Outsourced Packaging & Supply Chain Ops',
    description: 'Monthly retainer packaging and supply chain operations for scaling brands.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
