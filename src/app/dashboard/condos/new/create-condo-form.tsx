'use client';

import { useMutation } from '@tanstack/react-query';
import { SaveCondoForm, SaveCondoFormSchema } from '~/forms/save-condo';
import { useToast } from '~/hooks/use-toast';
import { createCondo } from './actions';

export function CreateCondoForm() {
  const { toast } = useToast();

  const createCondoMutation = useMutation({
    mutationFn: createCondo,
  });

  async function handleSubmit(data: SaveCondoFormSchema) {
    console.log(data);
    await createCondoMutation.mutateAsync(undefined, {
      onSuccess() {
        toast({
          description: 'Condomínio cadastrado com sucesso!',
        });
      },
      onError(error) {
        toast({
          description: error.message,
          variant: 'destructive',
        });
      },
    });
  }

  return <SaveCondoForm onSubmit={handleSubmit} />;
}
