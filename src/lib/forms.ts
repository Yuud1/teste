import { BaseSyntheticEvent } from 'react';

export type FormProps<T> = {
  defaultValues?: Partial<T>;
  onSubmit: (data: T, e?: BaseSyntheticEvent) => void | Promise<void>;
};
