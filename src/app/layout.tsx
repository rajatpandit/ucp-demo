import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { AgentDebugOverlay } from '@/components/debug/AgentDebugOverlay';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Style Omni-Scout | UCP Demo',
  description: 'Universal Commerce Protocol Retail Prototype',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans min-h-screen bg-gray-50 text-gray-900`}>
        {children}
        <AgentDebugOverlay />
      </body>
    </html>
  );
}
