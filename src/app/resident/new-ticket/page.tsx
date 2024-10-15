import { notFound } from 'next/navigation';
import { H1 } from '~/components/ui/h1';
import { TicketForm } from './form';

interface PageProps {
  searchParams: {
    condo?: string;
    area?: string;
  };
}

export default function OpenTicketPage({ searchParams }: PageProps) {
  if (!searchParams.condo) {
    notFound();
  }

  return (
    <div className="pb-16">
      <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-lg bg-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-default to-brand-accent"></div>
        <span className="relative text-2xl font-extrabold text-white">
          Condomínio XYZ
        </span>
      </div>

      <div className="container mx-auto">
        <section className="mt-12">
          <H1>Abertura de chamado</H1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            nobis quidem voluptate. In at voluptas quasi placeat
            exercitationem...
          </p>
        </section>

        <main className="mt-12">
          <TicketForm />
        </main>
      </div>
    </div>
  );
}
