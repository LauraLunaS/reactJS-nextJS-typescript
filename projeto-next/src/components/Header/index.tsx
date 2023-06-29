import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from './header.module.scss'

import { ActiveLink } from '../ActiveLink';

export function Header() {
  const { asPath } = useRouter();

    return (
      <header className={styles.container}>
        <div className={styles.content}>
          <img src="/vercel.svg" alt="DevNews!" />
          <nav>
            <ActiveLink legacyBehavior href="/" activeClassName={styles.active}>
              <a>Home</a>
            </ActiveLink>
            <ActiveLink legacyBehavior href="/posts" activeClassName={styles.active}>
              <a>Posts</a>
            </ActiveLink>
          </nav>
        </div>
      </header>
    );
  }