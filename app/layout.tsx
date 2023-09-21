import { Modal } from '@/components/modal';
import { CartDesktop } from '@/components/cart';
import { CartMobileIcon } from '@/components/header/structure/cart-mobile-icon';
import { Toaster } from 'react-hot-toast';
import { ContextProvider } from '@/context';
import { Bangers, Quicksand, Roboto_Condensed } from 'next/font/google';

import './globals.css';

const bangers = Bangers({
  subsets: ['latin'],
  variable: '--font-bangers',
  weight: ['400'],
});
const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
});
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-robotoCondensed',
  weight: ['300', '400', '700'],
});

export const metadata = {
  title: 'Pizza Land',
  description: 'Pizza Next Shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}
      >
        <ContextProvider>
          <CartDesktop />
          <CartMobileIcon />
          {children}
          <Modal />
          <Toaster />
        </ContextProvider>
      </body>
    </html>
  );
}
