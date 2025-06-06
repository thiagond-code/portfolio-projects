import type { Metadata } from 'next';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | thiagond',
    default: 'Portfolio'
  },
  description: 'My Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className='m-auto container p-4 text-neutral-600 space-y-8'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}