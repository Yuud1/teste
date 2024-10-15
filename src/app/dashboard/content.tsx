'use client'

import { PropsWithChildren } from "react";
import { useSegment } from "~/hooks/use-segment";
import { navigation } from "~/lib/navigation";

export function Content({ children }: PropsWithChildren) {
  const segment = useSegment();
  const hasSidebar = !!navigation.find((item) => item.href === segment)?.items
    ?.length;

  console.log(hasSidebar);
  
    
  return (
    <div
    className={`container flex-1 ${!hasSidebar ? 'mx-auto' : 'mx-0'}`}
  >
      {children}
    </div>
  )
}