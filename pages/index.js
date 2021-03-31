import Link from 'next/link';

import {Component0} from '../components/Component0';
import {Component2} from '../components/Component2';
import styles from '../styles/common.module.css';

export default function Home() {
  return (
    <div>
      <Component0 />

      <Component2 className={styles.wrapper} />

      <br />
      <Link href='/kek'>
        <a>go to kek</a>
      </Link>
    </div>
  );
}
