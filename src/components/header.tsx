import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

export default async function Header() {
  const logado = false;

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <ul>
          <li>
            <Link href={'/'}>
              <Image
                src={'/imagens/dogs.svg'}
                alt="Dogs logo"
                width={28}
                height={22}
                priority
              />
            </Link>
          </li>
          <li>
            {logado ? (
              <Link href={'/conta'} className={styles.login}>
                Dogs
              </Link>
            ) : (
              <Link href={'/login'} className={styles.login}>
                Login / criar
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
