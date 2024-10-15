import { Slash } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import Link from 'next/link';
import { Fragment } from 'react';

export type PathBreadcrumb = {
  label: string;
  href?: string;
};

interface PathBreadcrumbProps {
  paths: PathBreadcrumb[];
}

export function PathBreadcrumbs({ paths }: PathBreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, index) => (
          <Fragment key={path.label}>
            {index > 0 && (
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
            )}

            <BreadcrumbItem key={path.label}>
              {!path.href ? (
                <BreadcrumbPage>{path.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={path.href}>{path.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
