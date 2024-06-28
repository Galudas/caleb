import React from 'react';
import styles from './Wrapper.module.css';

type WrapperProps = {
    className?: string,
    children: React.ReactNode

}

const Wrapper = ({ children, className = '' }: WrapperProps) => {
  return <div className={`${styles.wrap} ${className}`}>{children}</div>;
};

Wrapper.defaultProps = {
  className: '',
};

export default Wrapper;
