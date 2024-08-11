import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import HeaderComponent from '../components/header-component/HeaderComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cheap things finder',
  description: 'App that searches cheaps things in online-shops',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <HeaderComponent />
          {children}
        </>
      </body>
    </html>
  );
}
