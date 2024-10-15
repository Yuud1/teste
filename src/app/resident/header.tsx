import Image from 'next/image';

export function Header() {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="relative h-32 w-32">
          <Image
            src="/logo.png"
            fill
            alt="Logo da Informma"
            className="absolute inset-0 object-contain"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-col text-right text-sm">
            <span className="font-medium">Pedro Gabriel Teixeira Miranda</span>
            <span className="text-slate-500">
              Condomínio Alameda das Acácias
            </span>
          </div>

          <button className="relative flex">
            <div className="z-10 h-12 w-12 rounded-full border bg-gradient-to-r from-slate-400 to-slate-600"></div>
            <div className="h-12 w-12 -translate-x-2/4 rounded-full border bg-gradient-to-r from-cyan-400 to-cyan-600"></div>
          </button>
        </div>
      </div>
    </header>
  );
}
