'use server';

import { LOGAR } from '@/functions/api';
import apiError from '@/functions/apiError';
import { cookies } from 'next/headers';

type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

export default async function userGet() {
  try {
    const token = (await cookies()).get('token')?.value;
    if (!token) throw new Error('token não encontrado');
    const { url } = LOGAR();
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) throw new Error('Erro ao logar');
    const data = (await response.json()) as User;
    return { ok: true, error: '', data };
  } catch (error: unknown) {
    return apiError(error);
  }
}
