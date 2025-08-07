'use server';

import { PERDEU_SENHA } from '@/functions/api';
import apiError from '@/functions/apiError';

export default async function perdeu(state: object, formData: FormData) {
  const login = formData.get('login') as string | null;
  const url = formData.get('url') as string | null;

  try {
    if (!login) throw new Error('Preencha os dados');
    const api = PERDEU_SENHA();
    const response = await fetch(api.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, url }),
    });
    if (!response.ok) throw new Error('Usuário / Email não cadastrado');
    return { ok: true, error: '', data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
