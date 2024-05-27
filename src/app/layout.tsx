import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { getGlobalPageData } from '@/data/loaders';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/custom/Header'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalPageData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header data={globalData.header} />
        {children}
      </body>
    </html>
  );
}
