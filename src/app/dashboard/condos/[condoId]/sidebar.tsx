'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

export function CondoSidebar() {
  const { condoId } = useParams();

  const items = useMemo(
    () => [
      {
        id: 'overview',
        title: 'Visão Geral',
        href: `/dashboard/condos/${condoId}`,
      },
      {
        id: 'maintenances',
        title: 'Manutenções',
        href: `/dashboard/condos/${condoId}/maintenances`,
      },
      {
        id: 'contracts',
        title: 'Contratos',
        href: `/dashboard/condos/${condoId}/contracts`,
      },
    ],
    [condoId],
  );

  return (
    <aside className="w-60 bg-red-200">
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="block rounded bg-slate-100 px-4 py-2"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
