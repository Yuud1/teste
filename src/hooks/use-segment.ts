import { usePathname } from 'next/navigation';

export function useSegment() {
  const pathname = usePathname();
  return pathname.split('/').slice(0, 3).join('/');
}
