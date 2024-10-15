'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { MailIcon, LockIcon } from 'lucide-react';
import { useState } from 'react';

const schema = z.object({
  email: z.string().email('Digite um e-mail válido').min(1, 'E-mail é obrigatório'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type LoginFormSchema = z.infer<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log(data);
    console.log('Lembrar-me:', rememberMe);
    router.push('/dashboard');
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <fieldset>
          <div className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem >
                  <FormLabel className="text-zinc-400 flex items-center">
                    <MailIcon className="mr-2 h-5 w-5 text-zinc-400" />
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="h-12 px-4 text-base focus-visible:ring-brand-default border-b border-zinc-400 focus:border-[#0EB9B3] focus:outline-none rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-400 flex items-center">
                    <LockIcon className="mr-2 h-5 w-5 text-zinc-400" />
                    Senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="h-12 px-4 text-base focus-visible:ring-brand-default border-b border-zinc-400 focus:border-[#0EB9B3] focus:outline-none rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-400" />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span className="h-4 w-4 border border-gray-400 rounded-full flex items-center justify-center">
                  {rememberMe && <span className="w-2 h-2 bg-[#0EB9B3] rounded-sm"></span>}
                </span>
                <span className="ml-2 text-gray-500">Mantenha-me conectado</span>
              </label>
              <a
                href="/esqueci-minha-senha"
                className="text-zinc-500 text-md underline hover:text-[#0EB9B3]"
              >
                Esqueci minha senha
              </a>
            </div>

            <Button
              type="submit"
              variant="brand"
              className="w-full py-6 text-base font-semibold shadow-lg bg-gradient-to-r from-[#28827f] via-[#0EB9B3] to-[#28827f] hover:opacity-90"
            >
              Entrar
            </Button>
          </div>
        </fieldset>
      </form>
    </Form>
  );
}
