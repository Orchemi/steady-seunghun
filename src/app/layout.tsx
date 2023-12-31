import Providers from '@/components/providers/Providers';
import '../styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '개발 블로그',
  description: 'Next.js + MDX + SCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={'ko'}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
