'use server';

import { CRIAR_USER } from '@/functions/api';
import apiError from '@/functions/apiError';

export default async function criar(state: object, formData: FormData) {
  try {
    const { url } = CRIAR_USER();
    const response = await fetch(url, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Usuário ou email já cadastrados');
    return { ok: true, error: '', data: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}
