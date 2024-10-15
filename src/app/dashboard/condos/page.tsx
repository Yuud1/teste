import { DownloadIcon, EyeIcon, PencilIcon } from 'lucide-react';
import Link from 'next/link';
import { PathBreadcrumb, PathBreadcrumbs } from '~/components/path-breadcrumbs';
import { Button, buttonVariants } from '~/components/ui/button';
import { H1 } from '~/components/ui/h1';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationLast,
} from '~/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table';

const paths = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Condomínios' },
] satisfies PathBreadcrumb[];

const condos = [
  {
    id: '1',
    type: 'Residencial',
    name: 'Condomínio 1',
    location: 'Rio de Janeiro - RJ',
  },
  {
    id: '2',
    type: 'Comercial',
    name: 'Condomínio 2',
    location: 'São Paulo - SP',
  },
  {
    id: '3',
    type: 'Misto',
    name: 'Condomínio 3',
    location: 'Belo Horizonte - MG',
  },
  { id: '4', type: 'Casas', name: 'Condomínio 4', location: 'Salvador - BA' },
  {
    id: '5',
    type: 'Residencial',
    name: 'Condomínio 5',
    location: 'Brasília - DF',
  },
  {
    id: '6',
    type: 'Comercial',
    name: 'Condomínio 6',
    location: 'Curitiba - PR',
  },
  { id: '7', type: 'Misto', name: 'Condomínio 7', location: 'Fortaleza - CE' },
  { id: '8', type: 'Casas', name: 'Condomínio 8', location: 'Manaus - AM' },
  {
    id: '9',
    type: 'Residencial',
    name: 'Condomínio 9',
    location: 'Recife - PE',
  },
  {
    id: '10',
    type: 'Comercial',
    name: 'Condomínio 10',
    location: 'Porto Alegre - RS',
  },
  { id: '11', type: 'Misto', name: 'Condomínio 11', location: 'Goiânia - GO' },
  { id: '12', type: 'Casas', name: 'Condomínio 12', location: 'Belém - PA' },
  {
    id: '13',
    type: 'Residencial',
    name: 'Condomínio 13',
    location: 'Vitória - ES',
  },
  {
    id: '14',
    type: 'Comercial',
    name: 'Condomínio 14',
    location: 'Florianópolis - SC',
  },
  { id: '15', type: 'Misto', name: 'Condomínio 15', location: 'Natal - RN' },
];

export default function CondosPage() {
  return (
    <div>
      <section>
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <PathBreadcrumbs paths={paths} />
            <H1>Cadastro de condomínios</H1>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">
              <DownloadIcon className="h-4 w-4" />
              <span className="ml-2">Exportar</span>
            </Button>

            <Link
              href="/dashboard/condos/new"
              className={buttonVariants({ variant: 'brand' })}
            >
              Novo condomínio
            </Link>
          </div>
        </div>
      </section>

      <main className="mt-20">
        <div className="flex flex-col gap-8">
          <Table>
            <TableHeader>
              <TableHead>Condomínio</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Ações</TableHead>
            </TableHeader>
            <TableBody>
              {condos.map((condo) => (
                <TableRow key={condo.id}>
                  <TableCell>{condo.name}</TableCell>
                  <TableCell>{condo.type}</TableCell>
                  <TableCell>{condo.location}</TableCell>
                  <TableCell>
                    <div className="flex gap-2 text-slate-600">
                      <Link href={`/dashboard/condos/${condo.id}`}>
                        <EyeIcon className="h-4 w-4" />
                      </Link>
                      <Link href="#">
                        <PencilIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-start justify-between gap-4 border-t pt-4">
            <span className="text-sm text-muted-foreground">
              Exibindo 1-15 de 150 resultados
            </span>

            <Pagination className="ml-auto">
              <PaginationContent>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLast href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  );
}
