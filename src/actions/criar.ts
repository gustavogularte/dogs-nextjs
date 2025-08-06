'use server';

import { CRIAR_USER } from '@/functions/api';
import apiError from '@/functions/apiError';
import login from './login';

export default async function criar(state: object, formData: FormData) {
  const username = formData.get('username') as string | null;
  const email = formData.get('email') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!password || !email || !username) throw new Error('Preencha os dados');
    const { url } = CRIAR_USER();
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Usuário ou email já cadastrados');
    const {ok} = await login({ok: true, error: ''}, formData)
    if (!ok) throw new Error('Erro ao logar')
    return { ok: true, error: '', data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
