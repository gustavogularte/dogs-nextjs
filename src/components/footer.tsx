import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image
          src={'/imagens/dogs-footer.svg'}
          alt="Dogs logo"
          width={28}
          height={22}
          priority
        />
      </Link>
      <p>
        <a href="https://www.origamid.com" target="_blank" rel="noreferrer">
          Origamid
        </a>{' '}
        © Projeto feito por{' '}
        <a
          href="https://github.com/gustavogularte"
          target="_blank"
          rel="noreferrer"
        >
          Gustavo Gularte Arend
        </a>
        .
      </p>
    </footer>
  );
}
