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
    <Button disabled={pending}>Resetando...</Button>
  ) : (
    <Button>Resetar</Button>
  );
}

export default function ResetarForm({keyToken, login}: {keyToken: string, login: string}) {
  const [state, action] = useActionState(perdeu, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form action={action}>
      <Input label="Nova Senha" name="password" type='password'/>
      {state.ok ? <p style={{color: "green"}}>Senha alterada com sucesso.</p> : <ButtonForm />}
      <input type="hidden" name="key" value={keyToken}/>
      <input type="hidden" name="login" value={login} />
      <ErrorMessage error={state.error} />
    </form>
  );
}
