'use client';
import React, { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Button from '../forms/button';
import Input from '../forms/input';
import ErrorMessage from '../helper/errorMessage';
import perdeu from '@/actions/perdeu';

function ButtonForm() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled={pending}>Carregando...</Button>
  ) : (
    <Button>Entrar</Button>
  );
}

export default function PerdeuForm() {
  const [state, action] = useActionState(perdeu, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form action={action}>
      <Input label="Usuário / Email" name="login" />
      <input
        type="hidden"
        value={window.location.href.replace('perdeu', 'resetar')}
        name='url'
      />
      {state.ok ? <p style={{color: "green"}}>Email enviado.</p> : <ButtonForm />}
      <ErrorMessage error={state.error} />
    </form>
  );
}
