import { Sora, Inter } from 'next/font/google';

export const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700'], // for headings
  variable: '--font-sora',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'], // for body
  variable: '--font-inter',
});