import styles from './input.module.css';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={props.name} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} type='text' id={props.name} {...props} />
      {error ?? <p className={styles.erro}>{error}</p>}
    </div>
  );
}
