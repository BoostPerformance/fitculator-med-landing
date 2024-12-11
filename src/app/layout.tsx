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
          content="핏큘레이터와 함께 요요 없는 지속가능한 다이어트를 하세요"
        />
        <meta
          name="keywords"
          content="다이어트, 위고비, 핏큘레이터, fitculator, 체중 관리, 식단관리, 운동관리, 비만탈출, 비만탈출, 과체중, 운동 계획, 헬스, 체중감량, 고도비만, 다이어트 약,위고비 다이어트, 위고비 효과, 위고비 감량, 위고비 체험, 비만치료제, 비만약, 다이어트주사, 오젬픽"
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
