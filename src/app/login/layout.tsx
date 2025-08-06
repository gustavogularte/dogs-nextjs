import styles from './login.module.css';

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.loginContainer}>
      <article>{children}</article>
    </main>
  );
}
