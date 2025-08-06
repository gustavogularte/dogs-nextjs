'use client';

import login from '@/actions/login';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/errorMessage';

function ButtonForm() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Carregando...</Button>
  ) : (
    <Button>Entrar</Button>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
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
      <Input label="Senha" name="password" type="password" />
      <ButtonForm />
      <ErrorMessage error={state.error} />
    </form>
  );
}
