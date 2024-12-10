import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
import Footer from './components/common/footer';
import Header from './components/common/header';

export const metadata: Metadata = {
  title: 'fitculator-med',
  description: 'fitculator-med-landing ',
  icons: {
    icon: '/images/meta-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body className={`font-pretendard`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
