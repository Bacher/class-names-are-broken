import Link from 'next/link';

import {Component2} from '../components/Component2';
import styles from '../styles/common.module.css';

export default function Kek() {
  return (
    <div>
      <Component2 className={styles.wrapper} />

      <br />
      <Link href='/'>
        <a>go to home</a>
      </Link>
    </div>
  );
}
