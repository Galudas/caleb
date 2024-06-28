import React, { HTMLProps } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  label: string
  type: 'submit' | 'reset' | 'button'
  transparency?: boolean
} & HTMLProps<HTMLButtonElement>

const ButtonComponent = ({ ...props }: ButtonProps) => {
  const {
    label,
    type,
    transparency,
    ...remainedProps
  } = props;
  // eslint-disable-next-line react/button-has-type
  return <button type={type} className={`${styles.button} ${transparency ? styles.transparency : ''}`} {...remainedProps}>{label}</button>;
};

ButtonComponent.defaultProps = {
  transparency: false,
};

export default ButtonComponent;
