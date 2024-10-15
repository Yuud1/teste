import { H1 } from '~/components/ui/h1';
import { DashboardTabs } from './tabs';
import { PathBreadcrumb, PathBreadcrumbs } from '~/components/path-breadcrumbs';
import { Dashboard } from './dashboard';

const paths = [
  {
    label: 'Home',
  },
  {
    label: 'Dashboard',
    href: '/',
  },
] satisfies PathBreadcrumb[];

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-2">
        <PathBreadcrumbs paths={paths} />
        <H1>Dashboard</H1>
      </section>

      <section className="mt-8">
        <DashboardTabs />
      </section>

      <section className="mt-10">
        <Dashboard />
      </section>
    </div>
  );
}
