import './globals.css';
import type { Metadata } from 'next';
import { impact, akrobat } from './fonts';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Smashandfun - Pokój Złości | Demolka dla zabawy',
  description: 'Zrelaksuj się niszcząc przedmioty w naszym pokoju złości. Idealne miejsce na odstresowanie się i dobrą zabawę.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${impact.variable} ${akrobat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}