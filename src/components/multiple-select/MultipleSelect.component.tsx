import React, { HTMLProps } from 'react';
import styles from './MultipleSelect.module.css';

type MultipleSelectProps = {
  label?: string,
  className?: string,
  name: string
  selects: Array<{
    options: Array<{
      key: string,
      value: string
    }> & HTMLProps<HTMLSelectElement>
  }>
}

const MultipleSelectComponent = ({ ...props }: MultipleSelectProps) => {
  const {
    label,
    className,
    name,
    selects,
  } = props;

  return (
    <span className={`${styles.wrapper} ${className}`}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.multipleSelectWrapper}>
        {selects.map((select, selectIndex) => {
          const {
            options,
            ...remainedProps
          } = select;

          return (
            <select key={`select-${selectIndex}`} name={name} className={styles.select} {...remainedProps}>
              {options.map((option, optionIndex) => (
                <option key={`option-${selectIndex}-${optionIndex}`} value={option.key}>{option.value}</option>
              ))}
            </select>
          );
        })}
      </div>
    </span>
  );
};

MultipleSelectComponent.defaultProps = {
  label: undefined,
  className: '',
};

export default MultipleSelectComponent;
