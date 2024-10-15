'use client';

import Link from 'next/link';
import { useSegment } from '~/hooks/use-segment';
import { navigation } from '~/lib/navigation';

export function Navbar() {
  const segment = useSegment();

  return (
    <nav>
      <ul className="flex flex-row gap-2">
        {navigation.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={`border-b-2 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 ${
                segment === item.href
                  ? 'border-brand-default text-brand-default'
                  : 'border-transparent hover:bg-slate-800'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
