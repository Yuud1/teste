import { PathBreadcrumb, PathBreadcrumbs } from '~/components/path-breadcrumbs';
import { H1 } from '~/components/ui/h1';
import { CreateCondoForm } from './create-condo-form';

const paths = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Condomínios', href: '/dashboard/condos' },
  { label: 'Novo condomínio' },
] satisfies PathBreadcrumb[];

export default function CreateCondoPage() {
  return (
    <div>
      <section>
        <div className="flex flex-col gap-2">
          <PathBreadcrumbs paths={paths} />
          <H1>Novo condomínio</H1>
          <p className="text-muted-foreground">
            Preencha o formulário abaixo para cadastrar um novo condomínio no
            sistema.
          </p>
        </div>
      </section>

      <main className="mt-20">
        <CreateCondoForm />
      </main>
    </div>
  );
}
