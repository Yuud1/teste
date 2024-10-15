import { PropsWithChildren } from 'react';
import { Sidebar } from './sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto bg-white p-16">
        {children}
      </div>
    </div>
  );
}
