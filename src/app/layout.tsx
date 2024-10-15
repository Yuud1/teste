import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Toaster } from '~/components/ui/toaster';
import { Providers } from '~/providers';
import './globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Providers>
      <html lang="pt-BR">
        <body className="antialiased">
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Informma Síndicos',
    default: 'Informma Síndicos',
  },
};
