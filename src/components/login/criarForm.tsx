'use client';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/errorMessage';
import criar from '@/actions/criar';

function ButtonForm() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Cadastrando...</Button>
  ) : (
    <Button>Cadastrar</Button>
  );
}

export default function CriarForm() {
  const [state, action] = useActionState(criar, {
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
