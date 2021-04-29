import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './Input';

export const Page2 = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      FirstName: '',
    },
    mode: 'onChange',
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="FirstName" rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
};
