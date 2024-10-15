import { PropsWithChildren } from 'react';
import { PathBreadcrumb, PathBreadcrumbs } from '~/components/path-breadcrumbs';
import { H1 } from '~/components/ui/h1';
import { CondoSidebar } from './sidebar';

interface CondoPageLayoutProps {
  params: {
    condoId: string;
  };
}

const paths = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Condomínios', href: '/dashboard/condos' },
  { label: 'Condomínio XYZ' },
] satisfies PathBreadcrumb[];

export default function CondoPageLayout({
  params,
  children,
}: PropsWithChildren<CondoPageLayoutProps>) {
  return (
    <div>
      <section>
        <div className="flex flex-col gap-2">
          <PathBreadcrumbs paths={paths} />
          <H1>Condomínio XYZ</H1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            maiores voluptate facere autem, deserunt minus illo neque esse alias
            provident suscipit quidem, quas, quos.
          </p>
        </div>
      </section>

      <div className="mt-16 flex">
        <CondoSidebar />
        {children}
      </div>
    </div>
  );
}
