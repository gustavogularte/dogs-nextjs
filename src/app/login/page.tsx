import LoginForm from '@/components/login/loginForm';
import Link from 'next/link';
import styles from './login.module.css';

export default async function LoginPage() {
  return (
    <section>
      <h1 className="titulo">Login</h1>
      <LoginForm />
      <Link href={'/login/perdeu'} className={styles.perdeuLink}>
        Perdeu a senha?
      </Link>
      <h2 className="subtitulo">Cadastra-se</h2>
      <p className={styles.cadastrar}>Ainda não possui conta? Cadastre-se no site.</p>
      <Link href={'/login/criar'} className='button'>Cadastro</Link>
    </section>
  );
}
