import Link from 'next/link';
import { Navbar } from './navbar';

export function Header() {
  return (
    <header className="flex items-center px-12 py-8">
      <section className="border-r border-slate-800 pr-5">
        <Link href="/dashboard">
          <span className="text-xl font-semibold text-white">
            Logo horizontal
          </span>
        </Link>
      </section>

      <section className="ml-5">
        <Navbar />
      </section>

      <section className="ml-auto">
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-right">
            <span className="text-sm text-white">
              Pedro Gabriel Teixeira Miranda
            </span>
            <span className="text-sm text-slate-400">
              pedro.miranda@beecondo.com
            </span>
          </div>

          <button
            type="button"
            className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-tr from-slate-400 to-slate-600"
          ></button>
        </div>
      </section>
    </header>
  );
}
