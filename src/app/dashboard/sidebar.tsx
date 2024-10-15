'use client';

import {
  Building2Icon,
  EllipsisIcon,
  HammerIcon,
  HardHatIcon,
  HomeIcon,
  LayoutPanelTopIcon,
  PhoneCallIcon,
  SettingsIcon,
  SignatureIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSegment } from '~/hooks/use-segment';

const sidebar = [
  {
    id: 'dashboard',
    items: [
      {
        id: 'dashboard/dashboard',
        label: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon,
      },
      {
        id: 'calls/calls',
        label: 'Chamados',
        href: '/dashboard/calls',
        icon: PhoneCallIcon,
      },
    ],
  },
  {
    id: 'condos',
    label: 'Condomínios',
    items: [
      {
        id: 'condos/condos',
        label: 'Cadastro',
        href: '/dashboard/condos',
        icon: Building2Icon,
      },
      {
        id: 'condos/maintenances',
        label: 'Manutenções',
        href: '/dashboard/maintenances',
        icon: HardHatIcon,
      },
      {
        id: 'condos/structures',
        label: 'Estruturas',
        href: '/dashboard/structures',
        icon: LayoutPanelTopIcon,
      },
    ],
  },
  {
    id: 'services',
    label: 'Serviços',
    items: [
      {
        id: 'services/providers',
        label: 'Prestadores',
        href: '/dashboard/providers',
        icon: HammerIcon,
      },
      {
        id: 'services/contracts',
        label: 'Contratos',
        href: '/dashboard/contracts',
        icon: SignatureIcon,
      },
    ],
  },
  {
    id: 'admin',
    label: 'Administrativo',
    items: [
      {
        id: 'users',
        label: 'Usuários',
        href: '/dashboard/users',
        icon: UsersIcon,
      },
      {
        id: 'settings',
        label: 'Configurações',
        href: '/dashboard/settings',
        icon: SettingsIcon,
      },
    ],
  },
];

export function Sidebar() {
  const segment = useSegment();

  return (
    <aside className="flex w-[400px] flex-col border border-slate-900 bg-slate-950 px-4 pt-8">
      <section className="mx-auto">
        <div className="relative h-32 w-32">
          <Image
            src="/logo-white.png"
            className="absolute inset-0 object-contain"
            alt="Logo da Informma Síndicos"
            fill
          />
        </div>
      </section>

      <section className="mt-8 flex-1 divide-y divide-slate-800">
        {sidebar.map((group, index) => (
          <nav key={group.id} className={index === 0 ? 'pb-6' : 'py-6'}>
            {!!group.label && (
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-600">
                {group.label}
              </h2>
            )}

            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 rounded px-4 py-2.5 text-base font-medium transition-colors duration-300 ${segment === item.href ? 'bg-brand-default font-semibold text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </section>

      <section className="border-t border-slate-900 py-4">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-r from-slate-400 to-slate-600"></div>

          <span className="line-clamp-1 text-sm font-semibold text-white">
            Pedro Gabriel Teixeira Miranda
          </span>

          <button
            type="button"
            className="ml-auto shrink-0 rounded px-2 py-1 transition-colors duration-300 hover:bg-slate-800"
          >
            <EllipsisIcon className="h-4 w-4 text-slate-400" />
          </button>
        </div>
      </section>
    </aside>
  );
}
