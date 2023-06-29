import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from './header.module.scss'

export function Header() {
  const { asPath } = useRouter();

    return (
      <header className={styles.container}>
        <div className={styles.content}>
          <img src="/next.svg" alt="DevNews!" />
          <nav>
            <Link legacyBehavior href="/">
              <a className={ asPath === '/' ? styles.active : ''}>Home</a>
            </Link>
            <Link legacyBehavior href="/posts">
              <a className={ asPath === '/posts' ? styles.active : ''}>Posts</a>
            </Link>
          </nav>
        </div>
      </header>
    );
  }