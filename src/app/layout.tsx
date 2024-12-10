import type { Metadata } from 'next';
import './globals.css';
import Head from 'next/head';
import Footer from './components/common/footer';
import Header from './components/common/header';
import Script from 'next/script';

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
        <meta
          name="description"
          content="Fitculator로 BMI, 칼로리 소모량, 운동 계획을 계산하세요. 쉽고 빠르게 건강 목표를 달성하세요."
        />
        <meta
          name="keywords"
          content="건강 계산기, 체중 관리, BMI 계산기, 칼로리 계산, 운동 계획"
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
      </Script>

      <body className={`font-pretendard`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
