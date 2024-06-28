import React, { HTMLProps } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  label?: string,
  name: string,
  className?: string
  options: Array<{
    key: string,
    value: string
  }>
} & HTMLProps<HTMLSelectElement>

const SelectComponent = ({ className, ...props }: SelectProps) => {
  const {
    label,
    type,
    name,
    options,
    ...remainedProps
  } = props;
  // eslint-disable-next-line react/button-has-type
  return (
    <span className={`${styles.wrapper} ${className}`}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <select name="pets" id="pet-select" className={styles.select} {...remainedProps}>
        {options.map((option, index) => (
          <option key={index} value={option.key}>{option.value}</option>
        ))}
      </select>

    </span>
  );
};

SelectComponent.defaultProps = {
  className: '',
  label: undefined,
};

export default SelectComponent;
