import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rohith Narahari | Software Engineer & Blockchain Developer',
  description: 'Software Engineer with 3+ years of experience building scalable APIs, secure backend systems, and production-ready dApps. Winner of Avalanche Track at Chainlink x Chromia Hackathon 2025.',
  keywords: ['Software Engineer', 'Blockchain Developer', 'Full Stack', 'Web3', 'Solidity', 'Node.js', 'React', 'TypeScript'],
  authors: [{ name: 'Rohith Narahari' }],
  creator: 'Rohith Narahari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rohith Narahari | Software Engineer & Blockchain Developer',
    description: 'Building scalable systems and privacy-preserving dApps',
    siteName: 'Rohith Narahari Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohith Narahari | Software Engineer & Blockchain Developer',
    description: 'Building scalable systems and privacy-preserving dApps',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
