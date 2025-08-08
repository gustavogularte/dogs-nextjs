import ResetarForm from '@/components/login/resetarForm';

type searchParamsResetar = {
  searchParams: {
    key: string;
    login: string;
  }
}

export default async function ResetarPage({searchParams} :searchParamsResetar) {

  return (
    <section className="animeLeft">
      <h1 className="titulo">Resete a senha</h1>
      <ResetarForm keyToken={searchParams.key} login={searchParams.login}/>
    </section>
  );
}
