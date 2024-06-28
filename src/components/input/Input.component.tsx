import React, { Fragment, HTMLProps } from 'react';
import styles from './InputComponent.module.css';

type InputProps = {
  label?: string,
  name: string,
  type: 'date' | 'text'
  className?: string
} & HTMLProps<HTMLInputElement>

const InputComponent = ({ className, ...props }: InputProps) => {
  const {
    label,
    type,
    name,
    ...remainedProps
  } = props;
  // eslint-disable-next-line react/button-has-type
  return (
    <span className={`${styles.wrapper} ${className}`}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <input name={name} type={type} className={styles.input} {...remainedProps} />
    </span>
  );
};

InputComponent.defaultProps = {
  className: '',
  label: undefined,
};

export default InputComponent;
