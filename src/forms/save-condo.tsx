import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, buttonVariants } from '~/components/ui/button';
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
import { FormProps } from '~/lib/forms';

export const schema = z.object({
  name: z.string(),
  type: z.string(),
  cnpj: z.string(),
  address: z.object({
    cep: z.string(),
    street: z.string(),
    number: z.string(),
  }),
  supervisorId: z.string(),
  managerId: z.string(),
});

export type SaveCondoFormSchema = z.infer<typeof schema>;

export function SaveCondoForm({
  defaultValues,
  onSubmit,
}: FormProps<SaveCondoFormSchema>) {
  const form = useForm<SaveCondoFormSchema>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset className="group">
          <div className="group-disabled:opacity-50">
            <div className="divide-y">
              <section className="grid grid-cols-3 gap-8 pb-16">
                <div>
                  <legend className="font-semibold">Geral</legend>
                  <span className="text-muted-foreground">
                    Informações gerais sobre o condomínio
                  </span>
                </div>

                <div className="col-span-2">
                  <div className="flex flex-col gap-8">
                    <FormField
                      control={form.control}
                      name="cnpj"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CNPJ</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome do condomínio</FormLabel>
                          <FormControl>
                            <Input type="text" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de condomínio</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo de condomínio" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="m@example.com">
                                Residencial
                              </SelectItem>
                              <SelectItem value="m@google.com">
                                Comercial
                              </SelectItem>
                              <SelectItem value="m@support.com">
                                Misto
                              </SelectItem>
                              <SelectItem value="m@support.com">
                                Casas
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="cnpj"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantidade de torres</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Quantidade de apartamentos</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Mês da AGO</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o mês" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">Janeiro</SelectItem>
                                <SelectItem value="2">Fevereiro</SelectItem>
                                <SelectItem value="3">Março</SelectItem>
                                <SelectItem value="4">Abril</SelectItem>
                                <SelectItem value="5">Maio</SelectItem>
                                <SelectItem value="6">Junho</SelectItem>
                                <SelectItem value="7">Julho</SelectItem>
                                <SelectItem value="8">Agosto</SelectItem>
                                <SelectItem value="9">Setembro</SelectItem>
                                <SelectItem value="10">Outubro</SelectItem>
                                <SelectItem value="11">Novembro</SelectItem>
                                <SelectItem value="12">Dezembro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-3 gap-8 py-16">
                <div>
                  <legend className="font-semibold">Localização</legend>
                  <span className="text-muted-foreground">
                    Informações sobre o endereço do condomínio
                  </span>
                </div>

                <div className="col-span-2">
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-4 gap-4">
                      <FormField
                        control={form.control}
                        name="address.cep"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CEP</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address.street"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Logradouro</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address.number"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Número</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex h-80 items-center justify-center rounded-lg border bg-accent">
                      Mapa
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-3 gap-8 py-16">
                <div>
                  <legend className="font-semibold">Gestão</legend>
                  <span className="text-muted-foreground">
                    Informações gerais sobre o condomínio
                  </span>
                </div>

                <div className="col-span-2">
                  <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="supervisorId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Supervisor</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o responsável" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="m@example.com">
                                  Supervisor 1
                                </SelectItem>
                                <SelectItem value="m@google.com">
                                  Supervisor 2
                                </SelectItem>
                                <SelectItem value="m@support.com">
                                  Supervisor 3
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="managerId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Síndico</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o responsável" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="m@example.com">
                                  Síndico 1
                                </SelectItem>
                                <SelectItem value="m@google.com">
                                  Síndico 2
                                </SelectItem>
                                <SelectItem value="m@support.com">
                                  Síndico 3
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Administradora</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Garantidora</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Construtora</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Incorporadora</FormLabel>
                            <FormControl>
                              <Input type="text" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="flex justify-end gap-2 pt-16">
                <Link
                  href="/dashboard/condos"
                  className={buttonVariants({
                    variant: 'link',
                  })}
                >
                  Cancelar
                </Link>
                <Button type="submit">Finalizar cadastro</Button>
              </section>
            </div>
          </div>
        </fieldset>
      </form>
    </Form>
  );
}
