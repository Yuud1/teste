import { PropsWithChildren } from 'react';
import { Header } from './header';

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
