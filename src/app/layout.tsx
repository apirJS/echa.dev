import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import ThemeProvider from '@/components/Provider';
import Container from '@/components/Container';
import Header from '@/components/Header';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Echa Apriliyanto',
  description: 'Personal website of Echa Apriliyanto',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} dark:bg-dark-primary flex justify-center overflow-y-scroll relative`}
      >
        <ThemeProvider>
          <SessionProvider session={session}>
            <Header />
            <Container>{children}</Container>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
