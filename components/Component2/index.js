import styles from './index.module.css';

export function Component2({className}) {
  return <div className={`${styles.wrapper} ${className || ''}`}>Component2</div>;
}
