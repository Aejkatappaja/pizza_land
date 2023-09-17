import { Modal } from './components/Modal';
import { CartDesktop } from './components/cart';
import { CartMobileIcon } from './components/cart-mobile-icon';
import { ToasterContext } from './context/ToasterContext';
import { CartContextProvider } from './context/CartContext';
import { VisibleContextProvider } from './context/isVisibleContext';
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
        <CartContextProvider>
          <VisibleContextProvider>
            <ToasterContext />
            <CartDesktop />
            <CartMobileIcon />
            {children}
            <Modal />
          </VisibleContextProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
