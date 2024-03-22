import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';
import { Roboto_Slab } from 'next/font/google';

import '../../styles/globals.css';

// ## components ##
import Header from '@/components/header/Header';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Felipe Matheus',
  description: 'FullStack Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.className}`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
