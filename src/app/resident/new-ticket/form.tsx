'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
import { Textarea } from '~/components/ui/textarea';

const schema = z.object({
  areaId: z.string(),
  title: z.string(),
  description: z.string(),
});

type TicketFormSchema = z.infer<typeof schema>;

export function TicketForm() {
  const searchParams = useSearchParams();
  const form = useForm<TicketFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      areaId: searchParams.get('area') ?? '',
      title: '',
      description: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <fieldset className="group">
          <div className="group-disabled:opacity-50">
            <div className="grid grid-cols-3 gap-20">
              <div className="col-span-2 flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={10}
                          placeholder="Descreva a natureza do seu chamado"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="button"
                  className="flex h-40 flex-col items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200"
                >
                  <span className="font-medium">
                    Clique aqui para fazer upload das imagens
                  </span>
                  <span className="text-sm text-slate-700">
                    Ou arraste os arquivos até aqui
                  </span>
                </button>

                <div className="flex justify-end border-t border-slate-200 pt-8">
                  <Button type="submit" variant="brand" size="lg">
                    Abrir chamado
                  </Button>
                </div>
              </div>

              <div>
                <FormField
                  control={form.control}
                  name="areaId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Área do condomínio</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a área do condomínio" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="churrasqueira">
                            Churrasqueira
                          </SelectItem>
                          <SelectItem value="salaodefestas">
                            Salão de Festas
                          </SelectItem>
                          <SelectItem value="piscina">Piscina</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="mt-4 flex h-80 items-center justify-center rounded-lg bg-slate-100">
                  <span className="font-medium">Foto da área</span>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </Form>
  );
}
