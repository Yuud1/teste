import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const h1Styles = cva('scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0');

export type H1Props = ComponentProps<'h1'> & VariantProps<typeof h1Styles>;

export function H1({ className, ...props }: H1Props) {
  const allClasses = twMerge(h1Styles(), className);

  return (
    <h1 className={allClasses} {...props} />
  )
}