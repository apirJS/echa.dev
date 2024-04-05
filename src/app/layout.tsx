import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import ThemeProvider from '@/components/Provider';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { test } from '../database/schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Echa Apriliyanto',
  description: 'Personal website of Echa Apriliyanto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // test()

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-dark-primary flex justify-center overflow-y-scroll relative`}
      >
        <ThemeProvider>
            <Header />
            <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
