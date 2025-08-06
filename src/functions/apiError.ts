export default function apiError(error: unknown): {
  ok: boolean;
  error: string;
  data: null;
} {
  if (error instanceof Error) {
    return {
      ok: false,
      error: error.message,
      data: null,
    };
  } else {
    return {
      ok: false,
      error: 'Um erro ocorreu',
      data: null,
    };
  }
}
