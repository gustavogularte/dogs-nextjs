'use server';

import { PEGAR_TOKEN } from '@/functions/api';
import apiError from '@/functions/apiError';
import { cookies } from 'next/headers';

export default async function login(state: object, formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  try {
    if (!password || !username) throw new Error('Preencha os dados');
    const { url } = PEGAR_TOKEN();
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Usuário ou senha inválidos');
    const data = await response.json();
    (await cookies()).set('token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });
    return { ok: true, error: '', data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
