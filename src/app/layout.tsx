import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Provider from '@/components/Provider';
import Container from '@/components/Container';
import Header from '@/components/Header';

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
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-dark-primary flex justify-center overflow-y-scroll relative`}
      >
        <Provider>
          <Header />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
