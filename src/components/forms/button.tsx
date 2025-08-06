import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
