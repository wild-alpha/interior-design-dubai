// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Interior Design Dubai | Modern Interior Designs in Dubai',
  description: 'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    title: 'Interior Blog | Modern Interior Design in Dubai',
    description: 'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    url: 'https://yourdomain.com',
    siteName: 'Interior Blog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior Blog Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Blog | Modern Interior Design in Dubai',
    description: 'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://yourdomain.com",
              "name": "Interior Blog",
              "publisher": {
                "@type": "Organization",
                "name": "Interior Blog",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
