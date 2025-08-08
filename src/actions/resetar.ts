'use server';

import { RESETAR_SENHA } from '@/functions/api';
import apiError from '@/functions/apiError';

export default async function resetar(state: object, formData: FormData) {
  const password = formData.get('password') as string | null;
  const key = formData.get('key') as string | null;
  const login = formData.get('login') as string | null;

  try {
    if (!password || !key || !login) throw new Error('Preencha os dados');
    const api = RESETAR_SENHA();
    const response = await fetch(api.url, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Não autorizado');
    return { ok: true, error: '', data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
