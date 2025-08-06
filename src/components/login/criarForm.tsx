'use client';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/errorMessage';
import criar from '@/actions/criar';

function ButtonForm() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Carregando...</Button>
  ) : (
    <Button>Entrar</Button>
  );
}

export default function CriarForm() {
  const [state, action] = useFormState(criar, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <form action={action}>
      <Input label="Usuário" name="username" />
      <Input label="Email" name="email" type="email" />
      <Input label="Senha" name="password" type="password" />
      <ButtonForm />
      <ErrorMessage error={state.error} />
    </form>
  );
}
