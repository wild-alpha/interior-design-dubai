// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Interior Design Dubai | Modern Interior Designs in Dubai',
  description: 'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
  metadataBase: new URL('https://interiordesigndubai.studio/'),
  openGraph: {
    title: 'Interior Blog | Modern Interior Design in Dubai',
    description: 'Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.',
    url: 'https://interiordesigndubai.studio/',
    siteName: 'Interior Design Dubai',
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
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Interior Design Dubai",
              "url": "https://interiordesigndubai.studio/",
              "logo": "https://interiordesigndubai.studio/logo.png",
              "sameAs": [
                "https://www.instagram.com/yourprofile",
                "https://www.facebook.com/yourprofile"
              ]
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Interior Design Dubai",
              "url": "https://interiordesigndubai.studio/",
              "description": "Explore expert interior design tips, trends, and project inspirations from Dubai and around the world."
            }),
          }}
        />

        {/* BlogPosting Schema (for homepage with latest article or featured post) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Modern Interior Design in Dubai",
              "description": "Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.",
              "url": "https://interiordesigndubai.studio/",
              "author": {
                "@type": "Organization",
                "name": "Interior Design Dubai"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Interior Design Dubai",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://interiordesigndubai.studio/logo.png"
                }
              },
              "mainEntityOfPage": "https://interiordesigndubai.studio/",
              "image": "https://interiordesigndubai.studio/og-image.jpg",
              "datePublished": "2025-06-22"
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
