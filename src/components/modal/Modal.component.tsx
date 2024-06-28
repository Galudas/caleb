import React, {
  FormEvent, ReactNode, useEffect, useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import styles from './Modal.module.css';
import ButtonComponent from '../button/Button.component';

type ModalProps = {
  title: string
  key: string
  children: ReactNode
  onSubmit: () => void
  onCancel: () => void
  isDisplayed: boolean
}

const ModalComponent = ({
  title, key, children, onSubmit, onCancel, isDisplayed,
}: ModalProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'components.modal' });
  const ref = useRef<any>(null);

  const handleOnSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onCancel();
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onCancel]);

  return (createPortal(
    isDisplayed && (
    <>
      <div ref={ref} key={key} className={styles.modalWrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.children}>{children}</div>
        <div className={styles.buttons}>
          <ButtonComponent label={t('submit')} type="submit" onSubmit={handleOnSubmit} />
          <ButtonComponent label={t('cancel')} type="button" onClick={onCancel} transparency />
        </div>
      </div>
      <div className={styles.overlay} />
    </>
    ),
    document.body,
  ));
};

export default ModalComponent;
