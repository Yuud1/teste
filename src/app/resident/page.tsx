import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

const actions = [
  {
    label: 'Consulta e abertura de chamados',
    description:
      'Abra novos chamadas e consulte o andamento dos seus chamados abertos.',
    href: '/residents/tickets',
  },
  // {
  //   label: 'Regimento interno',
  //   description:
  //     'Consulte o regimento interno do condomínio de forma fácil com nossa solução empoderada por IA.',
  //   href: '/public/rules',
  // },
];

export default function Page() {
  return (
    <div className="container mx-auto">
      <main>
        <div className="flex flex-col gap-4">
          {actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex items-start justify-between gap-4 rounded-lg border p-8 shadow transition-colors duration-300 hover:bg-slate-50"
            >
              <div>
                <span className="text-lg font-semibold">{action.label}</span>
                <p>{action.description}</p>
              </div>

              <ChevronRightIcon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
