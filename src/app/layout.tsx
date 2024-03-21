import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';
import { Roboto_Slab } from 'next/font/google';

import '../../styles/globals.css';

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
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
